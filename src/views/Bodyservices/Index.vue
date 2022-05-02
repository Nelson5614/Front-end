<template>
<div>
    <div class="section1 pt-16 pl-16 py-16">
       <div class="ml-16">
       <h1 class="primary--text">Body Services</h1>
       <p class="white--text">Mlex Beauty Spa is the best <br> beauty spa you can find in town. Enjoy!</p>
       <span class="white--text">Home - Body Services</span>
       </div>
        <div class="ml-13">
            <div>
              <v-btn class="mt-6" icon color="white">
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
              <v-btn class="mt-6" icon color="white">
                <v-icon>mdi-whatsapp</v-icon>
              </v-btn> 
              <v-btn class="mt-6" icon color="white">
                <v-icon>mdi-instagram</v-icon>
              </v-btn>
            </div>
        </div>     
     </div>
     <div class="items py-16">
        <v-container>
            <div class="heading">
                <h4 class="caption font-weight-bold text-center">MlexBeautySpa Body Services</h4> <br>
                <h1 class="primary--text text-center">We provide best Body services for our client's satisfaction</h1>
                <p class="text-center mt-2">MlexBeautySpa is the best Body services spa in town. <br> Come experienc our luxurious treatment and create great memories with us</p>
            </div>
         <v-row align="center">
           <v-col lg="4" v-for="bodyservice in bodyservices" :key="bodyservice.tittle">
             <v-list class="d-flex align-center">
               <v-list-item 
               link
               :to="bodyservice.route"
               >
                 <v-card
                  flat
                  class="mx-auto mb-6"
                  max-width="344"
                  max-height="544"
                  >
                    <v-img
                      src="@/assets/img/ezgif-2-55a0043f2b.jpg"
                      height="200px"
                    ></v-img>
                    <v-card-title class="mx-4">
                      <h3 class="primary--text">{{ bodyservice.tittle }}</h3>
                    </v-card-title>
                    <p class=" font-weight-light"> {{bodyservice.message}}</p>
                  </v-card>
               </v-list-item>
             </v-list>
              
           </v-col>
         </v-row>
       </v-container>
        </div> 
</div>
</template>
<script>
export default {
    data(){
        return{
            bodyservices:[
                {tittle:'Facial Treatment', message:'Sports massage is reported to have many beneficial effects in athletes.',route:'facial-treatment'},
                {tittle:'Foot Detox', message:'Enhaces the body’s own natural detoxification abilities, this allows the body..',route:'foot-detox'},
                {tittle:'Butt Enlargement', message:'We use non surgical machines which helps one to boost and enlarge booty without any pain',route:'butt-enlargement'},
                {tittle:'Breasts Lifting', message:'Aromatherapy is a holistic healing treatment that uses natural plant extracts ',route:'breasts-lifting'},
                {tittle:'Tummy Reduction', message:'We use cavitation, Lazer lipolysis, radio frequency, fat suction, fat freezing',route:'tummy-reduction'},
                
            ]
        }
    }
}
</script>
<style scoped>
  .section1{
    background-image: url('@/assets/img/ezgif-2-becf3b1c3f.jpg');
    background-size: cover;
    position: relative;
  }

  .section1 h1{
    font-family: 'Playfair Display', serif;
    font-size: 60px;
  }
  .heading h1{
    font-family: 'Playfair Display', serif;
    font-size: 60px;
  }
  .section1 span{
    font-family: 'Playfair Display', serif;
    font-size: 20px;

    }

</style>