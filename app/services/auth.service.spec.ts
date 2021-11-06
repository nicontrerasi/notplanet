import { Injectable } from '@angular/core';
import { User } from '../shared/user.interface';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import * as firebase from 'firebase/compat/app';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import{AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import { Router } from "@angular/router";
import {Observable,of} from 'rxjs';
import {switchMap} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {
// propiedad de tipo observable que se crea
  public user$:Observable<User>;
//Lo que se importa se va inyectando en el constructor
// primero seria la autentificacion y luego se inyectara el angularfirestore
//Se puede manejar aqui o por separado en un metodo externo
  constructor( public afAuth:AngularFireAuth, private afs:AngularFirestore) { 
    this.user$=this.afAuth.authState.pipe(
      switchMap((user)=>{
        if(user){
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } 
        return of (null);
      })
    );
  }

//Metodos a usar
//Metodo para loguearse en la aplicacion
//aparte del catch se implementara una constante que sera igual al await
// que llamara al metodo signInWithEmailAndPassword() con los parametros
// email y password, para luego retornar el user correspondiente
async login(email:string,password:string):Promise<User>{
  try{
    const {user}= await this.afAuth.signInWithEmailAndPassword(email,password);
    //Despues que se obtiene el usuario se puede llamar al metodo y 
    //pasarle el parametro user
    this.updateUserData(user);
    return user;
  }
  catch(error){
    console.log('Error -->',error);
  }
}

//Metodo para registrarse en la aplicacion
// el createUserWithEmailAndPassword devuelve un objeto que esta contenido
// en user, a dicho metodo se le entrega los parametros
// con esto una vez que los usuarios se registren, recibirian un correo
//Para ello se programa aqui el envio como tal
async register(email:string,password:string): Promise<User>{
  try{
    const {user}= await this.afAuth.createUserWithEmailAndPassword(email,password)
    await  this.sendVerifcationEmail();
    return user;
  }
  catch(error){
    console.log('Error -->',error);
  }
}




// Metodod para reiniciar contraseña de lo usuarios
// Se ingresa un return con el metodo sendPasswordResetEmail(email) 
// Con el parametro de lo que enviara "email"
async resetPassword(email:string):Promise<void> {
  try{
    return this.afAuth.sendPasswordResetEmail(email);
  }
  catch(error){
    console.log('Error -->',error);
  }
}


// metodo de login con google 
// para el metodo incluido se debe levantar un provider
// lo que hiciemos para que funcione fue importar otro metodo
async loginGoogle(): Promise<User>{
  try{
    const {user}=await this.afAuth.signInWithPopup(new firebase.default.auth.GoogleAuthProvider());
    //Despues que se obtiene el usuario se puede llamar al metodo y 
    //pasarle el parametro user
    this.updateUserData(user);
    return user;
  }
  catch(error){
    console.log('Error -->',error);
  }
}


//Metedo para hacer el envio de email de verificacion
//El currentUser hace que cuando se registra el usuario, automaticamente
// lo loguea y envia el correo
async sendVerifcationEmail(): Promise<void>{
try{
  return(await this.afAuth.currentUser).sendEmailVerification();
}
catch(error){
  console.log('Error -->',error);
}
}

//metodo para verificar el envio del correo de registro
//recibe el usuario, de tipo User
// no es async porque no se requiere recueperar una promesa, solo saber
// si es True o False
isEmailVerified(user:User): boolean{
  return user.emailVerified===true ? true :false;
}


// Metodo de finalizacion de sesion para los usuarios
// El catch es una buena practica ante error se incluye en consola
//El await devuelve lo que sea que devuelva la funcion 
async loguot(): Promise<void>{
  try{
    await this.afAuth.signOut();
  }
  catch(error){
    console.log('Error -->',error);
  }
}


// metodo privado llamado updateUserData que como parametro recibira
// un user. primero se crea una constante llamada userRef que sera de
// tipo AngularFirestoreDocument y se usa la interface de User
// sera = al afs.doc de documento y la documento que se va a acceder 
// es a users pero no existe aun, firebase lo creara despues
// lo que hara es intentar leer en una coleccion llamada users, un 
//documento con ese id (`users/${user.uid}`)
private updateUserData(user:User){
  const userRef:AngularFirestoreDocument<User>=this.afs.doc(`users/${user.uid}`);
  // aqui se agrega una constante llamada data de tipo User que al colocarle
  // = podemos trabajarla como objeto
  const data:User ={
    uid: user.uid,
    email: user.email,
    emailVerified: user.emailVerified,
    displayName: user.displayName,
  };
  // con esta data, en caso de que ya exista, firebase hara un merge
  // de dicha informacion, trayendo la data y si existe que haga un 
  // merge de esa info 
  // cuando y donde usar este metodo: cuando el usuario se loguee
  // por lo que debe ser incorporado al metodo de login arriba(despues de la constante)
  return userRef.set(data,{merge:true});
}


}