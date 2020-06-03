/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { RecipedetailsComponent } from './recipedetails.component';

let component: RecipedetailsComponent;
let fixture: ComponentFixture<RecipedetailsComponent>;

describe('recipedetails component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ RecipedetailsComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(RecipedetailsComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});