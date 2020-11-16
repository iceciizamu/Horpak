<template>
<div>

   <table class="table table-brdered" style="margin:30px">
    <thead class="thead-dark">
        <tr style="text-align:center;">
            <th >เลขที่บิล</th>
            <th >ชื่อผู้เช่า</th>
            <th>เลขห้อง</th>
            <th>วันที่</th>
            <th>ค่าเช่าห้อง</th>
            <th>ค่าน้ำ
                (จำนวนยูนิต)
            </th>
            <th>ค่าไฟ(จำนวนยูนิต)</th>
            <th>ราคารวม</th>
           <th>สถานะการส่งบิล</th>
            <th>แก้ไข</th>
            <th>ลบ</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="bill in bills" v-bind:key ="bill.billid">
        
        <td>{{bill.billid}}</td>
        <td>{{bill.name}}</td>
        <td>{{bill.roomid}}</td>
        <td>{{bill.date}}</td>
        <td>{{bill.price}}</td>
        <td>{{bill.numwater}}</td>
        <td>{{bill.numele}}</td>
        <td>{{bill.pricetotal}}</td> 
       
       
        <td> <i @click="onEdit(bill)"   class="material-icons">create</i></td>
        <td><i @click="onDelete(bill.id)" class="material-icons">delete_forever</i></td>
       
        </tr>
    </tbody>
    
    </table>
    <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@200;400&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"> 
</div> 
</template>

<script>
import {db} from '~/plugins/firebaseConfig.js'
import firebase from 'firebase/app'
export default {
    data(){
        return{
            bills:[],
            bill:{
                billid:'',
                name:'',
                roomid:'',
                date:'',
                price:0,
                numwater:0,
                numele:0,
                pricetotal:0
            }
            }
        },
        computed: {
        sortUser() {
            return this.bills.slice().sort((a,b)=>{
                return a.id - b.id
                
            })
        }
    },
    created(){
        this.getBill()
    },
    methods:{
        getBill(){
             db.collection('bill').get().then(querySnapshot =>{
                 const bills =[]
                 const activeItem =[]
                
            querySnapshot.forEach(doc => {
                bills.push(doc.data())
                activeItem.push(doc.id)
                console.log(doc.id)
                
                
        })
        this.bills = bills
        this.activeItem = activeItem
      
        })
        // db.collection('user').get().then((querySnapshot)=>{
        //     querySnapshot.forEach((doc)=>{
        //         this.users.push(doc.data());
        //     })
        // })
        },
        onAdd(){
          // db.collection('bills').add(this.bill).then(this.getBill)
             db.collection("user").doc(billid).set(data)
          .then(function () {
                    console.log("Document successfully written! -> user");
                   
                })
                .catch(function (error) {
                    console.error("Error writing document: ", error);
                });
        },
        onDelete(){
            if(confirm('คุณแน่ใจที่จะลบใช่ไหรือไม่ ?')){
                //doc line
              db.collection("bill").doc(billid).delete().then(function() {
                  
                 console.log("Document successfully deleted!");
            }).catch(function(error) {
            console.error("Error removing document: ", error);
            });
            }
            
        },
        hideModal() {
        this.$refs['my-modal'].hide()
      },
        onEdit(bill){
            this.$refs['my-modal'].show();
            this.bill = bill;
            

        },
        onUpdate(){
           var data ={
          
          billid: this.bill.billid,
          name: this.bill.name,
          roomid: this.bill.roomid,
          status:this.bill.status,
          date: this.bill.date,
            price:this.bill.price,
                numwater:this.bill.numwater,
                numele:this.bill.numele,
                pricetotal:this.bill.pricetotal
        };
//ใส่doc line
           db.collection("bill").doc(billid).update(data)
.then(function() {
    console.log("Document successfully updated!");
    alert('แก้ไขข้อมูลเสร็จสิ้น')
})
.catch(function(error) {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
});


            
            
        }  

        }
  

    }

</script>

<style>

</style>