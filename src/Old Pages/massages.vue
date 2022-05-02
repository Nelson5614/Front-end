<template>
<div>
    <div class="section1 pt-16 pl-16 py-16">
       <div class="ml-16">
       <h1 class="primary--text">Massage Services</h1>
       <p class="white--text">Mlex Beauty Spa is the best <br> beauty spa you can find in town. Enjoy!</p>
       <span class="white--text">Home - Massages</span>
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
     <div class="massages py-16">
        <v-container>
            <div class="heading">
                <h4 class="caption font-weight-bold text-center">MlexBeautySpa Massage Services</h4> <br>
                <h1 class="primary--text text-center">We provide best massage services for our client's satisfaction</h1>
                <p class="text-center mt-2">MlexBeautySpa is the best Massage spa in town. <br> Come experienc our luxurious treatment and create great memories with us</p>
            </div>
         <v-row align="center" class="my-10">
           <v-col lg="4" v-for="massage in massages" :key="massage.tittle">
             <v-list class="d-flex align-center">
               <v-list-item 
               link
               :to="massage.route"
               >
                 <v-card
                 flat
                 class="mx-auto mb-6"
                  max-width="344"
                  max-height="544"
                  >
                    <v-img
                      src="../assets/img/ezgif-2-55a0043f2b.jpg"
                      height="200px"
                    ></v-img>
                    <v-card-title class="mx-1">
                      <h3 class="primary--text">{{ massage.tittle }}</h3>
                    </v-card-title>
                     <p class="font-weight-light mx-4"> {{massage.message}}</p>
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
            massages:[
                {tittle:'Sports massage', message:'Sports massage is reported to have many beneficial effects in athletes. Sports massage can be used pre-performance, post-performance, during training.',route:'sports'},
                {tittle:'Swedish Massage', message:'The Swedish massage is one of the most common types of massages you can get. It is performed to energize the body and improve overall health. This type of massage',route:'swedish'},
                {tittle:'Cupping', message:'Cupping therapy is an ancient form of alternative medicine in which a therapist puts special cups on your skin for a few minutes to create suction.',route:'cupping'},
                {tittle:'Aromatherapy', message:'Aromatherapy is a holistic healing treatment that uses natural plant extracts to promote health and well-being. Sometimes it is called essential oil therapy',route:'aromatherapy'},
                {tittle:'Reflexiology', message:'Reflexology is a type of massage that involves applying different amounts of pressure to the feet, hands, and ears. It iss based on a theory that these body parts are',route:'reflexiology'},
                
            ]
        }
    }
}
</script>
<style scoped>
  .section1{
    background-image: url('../assets/img/ezgif-2-becf3b1c3f.jpg');
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
.massages h3{
   font-family: 'Playfair Display', serif; 
}
</style>