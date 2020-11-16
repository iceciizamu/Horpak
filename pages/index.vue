<template>

  <div class="container">
    
    <div>
       <!-- <Logo /> -->
      <h1 class="title">
        ระบบการจัดการหอพัก หน้าแรก
      </h1>
    


        <nuxt-link to="/user" class = "button--grey">สำหรับผู้เช่า</nuxt-link>
        <nuxt-link to="/owner" class ="button--grey">สำหรับเจ้าของหอพัก</nuxt-link>

        
     
    </div>
  </div>
 
</template>

<script>
export default {
  layout:"navbar"
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 60px;
  color: #76a7db;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
