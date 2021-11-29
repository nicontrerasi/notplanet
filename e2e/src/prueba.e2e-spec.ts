import { browser, element, by } from "protractor";

describe('Test 1', ()=>{
    beforeEach(()=>{
        browser.get("/");
    });

    it("Comprobación de título", ()=>{
        expect(element(by.css(".header-title ion-title")).getText()).toContain("Inicio")
    })
    
})

describe('Test 2', ()=>{
    beforeEach(()=>{
        browser.get("/calid-aire");
    });

    it("Comprueba información de API", ()=>{
        expect(element(by.binding("holiday.name")).isPresent()).toBe;
    })
    
})