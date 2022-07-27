# About

Show greetings to user by time fast and easy!

# Installation

`npm i greetingstouser --save`

Then...

```
import {GreetingsToUser} from 'greetingstouser'

GreetingsToUser(new Date(),{showName:true,name="SR Joy"})

```

## options

GreetingsToUser supports 2 options

- _Date_ - \_date (Javascript Date Object , i.e new Date()) Optional

- \_Options
  - _showName_ - `false` | `true` (Default is `true`)
  - _Name_ - \_name (String) `Optional` (Default is `SR Joy`)
