<template>
  <b-container fluid ="md" class="py-2">
    <div  class="my-3">
    </div>
    <b-form @submit ="onSubmit" @reset="onReset" @update ="onUpdate">
      <b-form-group >
        <b-img v-if="getLine.pictureUrl == ''" center v-bind="mainProps" rounded="circle" alt="Circle image" src="~/assets/profile.png"  ></b-img>
       <b-img v-else center v-bind="mainProps" rounded="circle" alt="Circle image" :src="getLine.pictureUrl"  ></b-img>
      </b-form-group>
      <b-form-group>
        <b-col cols="12" class="text-center pt-2 pb-0">{{getLine.displayName}}</b-col>
      </b-form-group>
      <b-form-group label="Username" >
        <b-form-input 
        type="text" 
        placeholder="Username (ชื่อผู้ใช้งาน)" 
        v-model="form.username"
        required
       :state="usernameState"
      
         ></b-form-input>
         <b-form-invalid-feedback  >username ใช้ตัวอักษรภาษาอังกฤษ,ตัวเลข,.,-,_เท่านั้น</b-form-invalid-feedback>
      </b-form-group>
      <!-- <b-form-group label="Password" >
        <b-form-input 
        type="password" 
        placeholder="ระบุรหัสผ่านอย่างน้อย 6 ตัว" 
        v-model="form.password"
        required
       :state="passwordState"
         ></b-form-input>
         <b-form-invalid-feedback  >โปรดระบุรหัสผ่านอย่างน้อย 6 ตัว</b-form-invalid-feedback>
      </b-form-group> -->

      <b-form-group label="เลขบัตรประชาชน" >
        <b-form-input 
        id = "idcard-count" 
        type="number" 
        placeholder="ระบุเลขบัตรประชาชน 13 หลัก" 
        v-model="form.idcard"
        required
       :state="nameState"
         ></b-form-input>
         <b-form-invalid-feedback  >โปรดะบุเลขบัตรประชาชน 13 หลักเท่านั้น</b-form-invalid-feedback>
      </b-form-group>
      
      <b-form-group label="ชื่อ">
        <b-form-input type="text" placeholder="ระบุชื่อ" v-model="form.name" :state="firstnameState"></b-form-input>
      <b-form-invalid-feedback  >โปรดระบุชื่อเป็นภาษาไทยหรือภาษาอังกฤษ</b-form-invalid-feedback>
      </b-form-group>
      <b-form-group label="นามสกุล">
        <b-form-input type="text" placeholder="ระบุนามสกุล" v-model="form.lastname" :state="lastnameState"></b-form-input>
        <b-form-invalid-feedback >โปรดระบุนามสกุลเป็นภาษาไทยหรือภาษาอังกฤษ</b-form-invalid-feedback>
      </b-form-group>
      
      <div class="gender-group d-flex  mb-3">
      <p >เพศ</p>
        <div class="circle" :class="form.gender == 'female' ? 'active' : ''" @click="chooseGender('female')">
          <svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m411 155c0-85.467-69.533-155-155-155s-155 69.533-155 155c0 80.407 61.545 146.702 140 154.272v102.728h-55c-8.284 0-15 6.716-15 15s6.716 15 15 15h55v55c0 8.284 6.716 15 15 15s15-6.716 15-15v-55h55c8.284 0 15-6.716 15-15s-6.716-15-15-15h-55v-102.728c78.455-7.57 140-73.865 140-154.272zm-280 0c0-68.925 56.075-125 125-125s125 56.075 125 125-56.075 125-125 125-125-56.075-125-125z"/></g></svg>
        </div>
        <p>หญิง</p>
        <div class="circle" :class="form.gender == 'male' ? 'active' : ''" @click="chooseGender('male')">
          <svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m497 0h-140c-8.284 0-15 6.716-15 15s6.716 15 15 15h103.787l-173.104 173.104c-31.503-26.601-70.975-41.104-112.683-41.104-46.744 0-90.69 18.203-123.744 51.256s-51.256 77-51.256 123.744 18.203 90.69 51.256 123.744 77 51.256 123.744 51.256 90.69-18.203 123.744-51.256 51.256-77 51.256-123.744c0-41.708-14.503-81.18-41.104-112.683l173.104-173.104v103.787c0 8.284 6.716 15 15 15s15-6.716 15-15v-140c0-8.284-6.716-15-15-15zm-219.469 439.531c-27.387 27.386-63.8 42.469-102.531 42.469s-75.144-15.083-102.531-42.469c-27.386-27.387-42.469-63.8-42.469-102.531s15.083-75.144 42.469-102.531c27.387-27.386 63.8-42.469 102.531-42.469s75.144 15.083 102.531 42.469c27.386 27.387 42.469 63.8 42.469 102.531s-15.083 75.144-42.469 102.531z"/></g></svg>
        </div>
      <p>ชาย</p>
      </div>
      <b-form-group label="เบอร์โทร">
        <b-form-input type="number"  
        :state="phoneState"
        required
        placeholder="ระบุเบอร์โทรศัพท์ 10 หลัก" v-model="form.phone"></b-form-input>
        <b-form-invalid-feedback  >โปรดระบุเบอร์โทรศัพท์ 10 หลักเท่านั้น</b-form-invalid-feedback>
      </b-form-group>
      <b-button type="submit" variant="primary" class="mt-8" @click="onSubmit" >บันทึก</b-button>
      <b-button type="update" variant="info" class="mt-8" @click="onUpdate" >แก้ไข</b-button>
      <b-button type="reset" variant="danger">ล้าง</b-button>
    </b-form>
  <!-- </b-card>
  <b-card header="result">
    {{form}}
  </b-card>-->
<b-modal id="modal1" size="sm" v-model="dialog" title="Error" color="danger" ok-only>
    <p class="my-1" v-html="errorMsg"></p>
  </b-modal>
  </b-container>
</template>

<script scoped>
const reg = /^[a-zA-Z0-9-._]*$/
const regd = /^[0-9]*$/
const regname =/^[a-zA-zก-ํ]*$/
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import {db} from '~/plugins/firebaseConfig.js'
import firebase from 'firebase/app'
Vue.use(Vuelidate)
  export default {
   mounted(){
     liff.init({
      liffId:'1655214794-1Vo6BD2D'
     }).then(()=>{
       if(liff.isLoggedIn()){
         liff.getProfile().then(profile =>  {
           this.$store.dispatch('setLine',profile);
           this.isDone();
          //  this.profile.pictureUrl = profile.pictureUrl
          //  this.profile.displayName = profile.displayName
          //  this.profile.userId = profile.userId
         })
       }else{
         liff.login();
       }
     })

   },
   computed: {
     getLine(){
       return this.$store.getters.getLine;
        
     },
     usernameState(){
        if(this.form.username.length == 0){
          return;
        }
        else{
        return reg.test(this.form.username) ? true: false}
      },
    // passwordState(){
    //     if(this.form.password.length == 0){
    //       return;
    //     }
    //     else{
    //     return this.form.password.length >= 6 ? true: false}
    //   },
      nameState() {
        if (this.form.idcard.length == 0){
          return;
        }
        else{
        return this.form.idcard.length == 13 && regd.test.form.idcard ? true: false}
      },phoneState(){
        if (this.form.phone.length == 0){
          return;
        }
        else{
        return this.form.phone.length == 10 && regd.test(this.form.phone)? true: false}
      },firstnameState(){
        if (this.form.name.length == 0){
          return;
        }
        else{
        return regname.test(this.form.name) ? true :false}
      },
      lastnameState(){
        if (this.form.lastname.length == 0){
          return;
        }
        else{
        return regname.test(this.form.lastname) ? true :false}
      }
    },
    data() {
      return {
       dialog: false,
       errorMsg:'',
        //ดึงรูปวงกลมเข้ามา
        mainProps: { blank: false, blankColor: '#777', width: 150, height: 150, class: 'm1' },
        form:{
          username:"",
          idcard:"",
          name:"",
          lastname:"",
          phone:"",
          gender:"female"
        },
       
       
      }
    },
    methods: {
      chooseGender(gender){
        this.form.gender =  gender
      },
      //เมื่อloginเสร็จแล้วไม่ไปแล้วอีกรอบ
      isDone(){
         
        var data ={
          username: this.form.username,
          idcard: this.form.idcard,
          name: this.form.name,
          lastname: this.form.lastname,
          gender: this.form.gender,
          phone: this.form.phone,
        
        };
         db.collection("owner").doc(this.$store.getters.getLine.userId).get(data)
          .then(function(){
            if(data != null){
              console.log('คุณได้ลงทะเบียนเรียบร้อยแล้ว')
              //alert('คุณได้ลงทะเบียนไปแล้ว')
              
            }
          })              
      },
      validate(){
        let validated = true
        const i =['idcard']
        const errors =[]
        const validatorField = [
          'username','idcard','name','lastname','phone','gender'
        ]

        //const validatorUsername = ['username']
        // if(this.form.idcard.length != 13 || this.form.phone.length != 10 || this.form.password.length != 6  ){
        //     validated = false
        //     //ต้องแก้ตรงที่มันขึ้นpop-upเร็วแล้วออกไปเลย เหมือนพอไม่ได้อยุในvalidatorfeild มันเลยเร็ว
        //     //หรือควรจะตั้ง const เรียกใช้ใหม่
        //     errors.push(`เลขบัตรประชาชนต้องไม่น้อยกว่าหรือมากว่า 13 หลักและเบอร์โทรต้องมี 10 หลักเท่านั้น`)
        //  }
         
        validatorField.forEach((field) => {
          if(this.form[field] == ''){
            validated = false
            errors.push(`${field} can not be null`)
          } 
      
        })
        // validatorUsername.forEach((uu) => {
        //   if(this.form[uu] == db.doc(this.form.username)){
        //     validated = false
        //     errors.push(`${uu} ชื่อนี้มีคนใช้แล้ว`)
        //   }
        // })
        if(this.usernameState == false || this.phoneState == false || this.passwordState == false || this.nameState == false || this.firstnameState == false || this.lastnameState == false ){
           validated = false
  
         }
         
        if(!validated){
          this.errorMsg = errors.map((error)=> error+'<br/>').join('')
          this.dialog = true
        }
        return validated
      },
      onSubmit(evt){
         if(this.validate()){
         //  this.$router.push('/done')
           evt.preventDefault();  
        this.$axios.patch()
        //เก็บข้อมูล form ใน collection customers
        var data ={
          username: this.form.username,
          idcard: this.form.idcard,
          name: this.form.name,
          lastname: this.form.lastname,
          gender:this.form.gender,
          phone: this.form.phone,
        
        };
        
        db.collection("owner").doc(this.$store.getters.getLine.userId).set(data)
          .then(function () {
                    console.log("Document successfully written! -> user");
                   
                })
                .catch(function (error) {
                    console.error("Error writing document: ", error);
                });
    alert('ลงทะเบียนเสร็จสิ้น')   
    }
    // if (this.isDone()){
    //           console.log('wow')
              
    //           this.$router.push('/owner')     
    // }
   // else{
    //  alert('เกิดข้อผิดพลาดกรุณาลงทะเบียนใหม่')
   // }

          // if(this.form.username == db.doc('ice')){
          //    this.validate()
          //    validated = false
          //    alert ('aaa')
        //     errors.push(`${uu} ชื่อนี้มีคนใช้แล้ว`)
           //}
        // })
          
          
      },
      onUpdate(evt){
        if(this.validate){
          evt.preventDefault();
         var data ={
          username: this.form.username,
          idcard: this.form.idcard,
          name: this.form.name,
          lastname: this.form.lastname,
          gender:this.form.gender,
          phone: this.form.phone,
        
        };

        }
        var washingtonRef = db.collection("owner").doc(this.$store.getters.getLine.userId);
        return washingtonRef.update(data)
      .then(function() {
      console.log("Document successfully updated!");
      })
      alert('ทำการแก้ไขข้อมูลเสร็จสิ้น')
      .catch(function(error) {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
      });
      },
      onReset(evt){
        evt.preventDefault();
        this.form.username='';
        this.form.idcard='';
        this.form.name='';
        this.form.lastname='';
        this.form.gender='';
        this.form.phone='';

      }
    },
  }
</script>

<style lang="scss" scoped>
.py-2{
  background-color: hsl(218, 100%, 98%);
  margin: 0 auto;
  float: none;
  margin-bottom: 10px;
  /* เงา border: white;
 box-shadow:0 0 8px rgba(0,0,0,0.15); */
  font-family: 'Pridi', serif;
}

.gender-group{
  p{
    align-self: center;
    margin-bottom: 0;
    margin-right: 40px;
  }
  .circle{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    position: relative;
    color: white;
    margin-right: 20px;
    background-color:#ffffff; 
    &.active{
    background-color: hsla(210, 95%, 55%, 0.882);
    }
    svg{
    width: 30px;
    height: 30px;
    position: absolute;
    left: 6px;
    top: 6px;
    }
  }
  
}




</style>