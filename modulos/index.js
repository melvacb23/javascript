import { magigNumber, hello,bye } from "./constans.js";

import defecto from "./constans.js"

import Persona from "./persona.js"

console.log(magigNumber)

console.log(hello)

console.log(bye())

console.log(defecto)

per = new Persona("Cesar","ccuellar@sena.edu.co")

per.saludar()

console.log(per.getCorreo())