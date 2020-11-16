<template>
    <div>
    
        <b-navbar type="dark"  variant="dark">
            <b-navbar-nav>
                <nuxt-link class="nav-item nav-link" to="/owner/manage/horpak">จัดการหอพัก</nuxt-link>
                <nuxt-link class="nav-item nav-link" to="/owner/manage/manageUser">จัดการผู้เช่า</nuxt-link>
                <nuxt-link class="nav-item nav-link" to="/owner/manage/meter">จดมิเตอร์</nuxt-link>
               <nuxt-link class="nav-item nav-link" to="/owner/manage/complain">ข่าวสารร้องเรียน</nuxt-link>
                <nuxt-link class="nav-item nav-link" to="/owner/manage/bill">เรียกดูบิล</nuxt-link> 
            </b-navbar-nav>    
        </b-navbar>
    <Nuxt/>
    </div>
</template>