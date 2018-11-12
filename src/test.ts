// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import { Pony } from './app/pony';
import { Race } from './app/race';

declare const require: any;
/*
// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
*/

it('test unit', () => {
  const s = 'real value';
  expect(s).toBe('real value');
})

it('test pony', () => {
  const p = new Pony();
  expect(p.id).toBe(0);
})

it('test list vide poney courses', () => {
  const r = new Race();
  expect(r.ponies.length).toBeLessThanOrEqual(0);
})

it('test race possede liste poney', () => {
  const r = new Race();
  expect(r.ponies).toBeDefined;
})

it('test name by default poney', () => {
  const p = new Pony();
  expect(p.name).toBe('Noname');
})

it('test date by default race', () => {
  const r = new Race();
  expect(r.date).toEqual(new Date());
})


// Vérifier qu'une course a bien une liste de poneys instanciée
// Vérifier qu'une course n'a pas de poney à la création
// Vérifier le nom par défaut d'un poney
// Vérifier la date par défaut d'une course