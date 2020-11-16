<template>
<div class="container">
    <div>
      <Logo />
      <h1 class="title">
        Sign In
      </h1>
      <div class="links">


        <nuxt-link to="/owner/manage" class ="button--grey">submit</nuxt-link>
        <nuxt-link to="/owner/registerowner" class="button--grey"> Register Owner</nuxt-link>
        <formlogin/>
      </div>
    </div>
  </div>
</template>

<script>
import formlogin from '@/components/manage/formlogin'
export default {
    layout:"navbar"
}
</script>