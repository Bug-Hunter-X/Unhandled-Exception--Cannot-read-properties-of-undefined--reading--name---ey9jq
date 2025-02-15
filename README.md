# Unhandled Exception: Cannot read properties of undefined (reading 'name')
This repository demonstrates a common error in Express.js applications where an attempt is made to access a property of an undefined object, leading to an unhandled exception.  Specifically, it showcases the error that occurs when trying to access `req.user` before appropriate authentication or user data population.

## Bug Description
The primary issue lies in the `/` route handler where we directly access `req.user.name` without checking if `req.user` is actually defined.  If a request hits this route before authentication or user data is assigned, `req.user` will be `undefined`, resulting in a runtime error.

## Solution
The solution involves adding a check to see if `req.user` is defined before trying to access its `name` property.