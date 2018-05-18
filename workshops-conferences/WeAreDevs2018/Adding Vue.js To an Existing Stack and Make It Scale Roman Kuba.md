# Vue, scaling in an existing stack

@Roman Kuba

it's not always greenfield project
addding new tech is always investment
but necessary, always whu
competing tech, that will run in parallel
manage of running in paralell
where to draw the line
full spa is not possible at all (photo)
introduction (photo)
basics in 60 seconds (photo)
2 years of running vue in production
not a lot of resources
1 person all the frontend
large amount of users 15 000
very backend heavy system
you, against the team, eventually you go hand in hand
split the process into phases
1) reduce all the things
- Decide on language
- remove unknowns
- refactor little bits and pieces
coffe => jquery => js
2) introduce vue
choose manageble target
define clear entry point
load vue from cdn
use vue from the box
vue-feature attributes use beforeMount
use script x-templates
3) better build process
webpack is your friend
js => app
implement another vue build
aim for clean separation (photo)
refactor before pour over
introduce vue single-file-components
4) Build an spa
app != spa, part of app => spa
treat pages as spas
add vuex
blogpost from gitlab
old code or new code
splicing everything
created helper for slim
should pick the right file for us

mount vue
store
-

merge storess )photo_
super jenerice code

get ready to scale
app - several spas
prepeare scaffolding and generators
hygen (NB)

back it up by patterns and specs

good times ahead there should always be a "why"
we want to see performance increase
scaling => technical scaling
important scaling - is team scaling
could build feature faster and more reliable