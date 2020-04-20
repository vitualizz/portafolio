<template lang='pug'>
  div
    div
      p.t1 ¡Hola!
      p.t2 Yo soy
      p.t3 Lee Palacios
      p.t4 @vitualizz
    div.info-text
      p
        | Un joven desarrollador, amante de la tecnología,
        | emprendedor y con muchas ganas de cambiar el mundo.
        | Me encanta divertirme aprendiendo,
        | de igual manera conocer personas
        | y me deleita escribir código, analizarlo y entenderlo.
        br
        | ❤
</template>

<style scoped lang='sass'>
p
  font-family: $font-manjari
  letter-spacing: 1.4px
.t1
  font-weight: $weight-bold
  font-size: 10vh
  line-height: 30%
.t2
  font-weight: $weight-regular
  font-size: 5vh
.t3
  font-weight: $weight-bold
  font-size: 6.5vh
  line-height: 70%
.t4
  font-weight: $weight-bold
  font-size: 4.5vh
.info-text
  width: 30vh
  margin: 20px auto 0 !important
  font-size: 2.5vh
</style>
