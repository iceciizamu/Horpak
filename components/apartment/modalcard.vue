<template>
    <b-container>
        <b-button v-b-modal.modal-prevent-closing>+ Add Building</b-button>
    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Submit Your Name"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          :state="nameState"
          label="ชื่อหอพัก"
          label-for="name-input"
          invalid-feedback="Name is required"
        >
          <b-form-input
            id="name-input"
            v-model="form.name"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
          <b-form-group
          :state="nameState"
          label="ที่อยู่"
          label-for="name-input"
          invalid-feedback="Name is required"
        >
          <b-form-input
            id="name-input"
            v-model="form.address"
            :state="nameState"
            required
          ></b-form-input>
          </b-form-group>
          <b-form-group
          :state="nameState"
          label="เบอร์ติดต่อ"
          label-for="name-input"
          invalid-feedback="Name is required"
        >
          <b-form-input
            id="name-input"
            v-model="form.phone"
            :state="nameState"
            required
          ></b-form-input> </b-form-group>
          <b-form-group
          :state="nameState"
          label="แผนที่"
          label-for="name-input"
          invalid-feedback="Name is required"
        >
          <b-form-input
            id="name-input"
            v-model="form.map"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
    <b-button type="reset" variant="danger">Reset</b-button>
      </form>
    </b-modal>
     <b-card header="result">
    {{form}}
  </b-card>
    </b-container>
</template>
<script>
export default {
    data() {
      return {
        nameState: null,
        submittedNames: [],
        dialog: false,
        errorMsg:'',
        form:{
          name: '',
          address:'',
          phone:'',
          map:''
        },
      }
    },
    methods: {
      
   
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nameState = valid
        return valid
      },
      resetModal() {
        this.name = ''
        this.nameState = null
      },
      handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()

      },
      handleSubmit() {
        // const count = 1
        // if(count>=1){
        //   count = count +1

        // }
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        // Push the name to submitted names
         var data ={
          name: this.form.name,
          address: this.form.address,
          phone: this.form.phone,
          map: this.form.map
        };
        db.collection("apartment").doc('ice').set(data)
          .then(function () {
                    console.log("Document successfully written! -> user");
                })
                .catch(function (error) {
                    console.error("Error writing document: ", error);
                });
        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
       
          }
      }
    }

</script>