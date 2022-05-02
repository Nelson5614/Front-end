<template>
   <div class="about">
     <div class="section1 pt-16 pl-16 py-16">
       <div class="ml-16">
       <h1 class="primary--text">About Us</h1>
       <p class="white--text">Mlex Beauty Spa is the best <br> beauty spa you can find in town. Enjoy!</p>
       <div class="white--text">
         <v-btn to="/" color="white" text>Home</v-btn>
         - About</div>
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

     <div class="introductory py-12">
    <v-container
    class="d-flex justify-space-around"
    >
      <v-img 
        src="../assets/img/lemon-g61baf9fb0_1920.jpg"
        contain
        max-height="100%"
        max-width="50%"
      > 
      </v-img>
      <div class="px-16 mt-12">
        <h3 class="">Welcome to MlexBeautySpa</h3>
        <h1 class="primary--text ">Incredible & <br> Relaxiable spa</h1>
        <p class="mt-4">Mlex Beauty Spa started as an ambitious idea to promoting the good health and building the body shape, retaining self confidence and reclaiming your youth. As the business flourish our efforts has been successfully supported by the same community we love, and it has been a wonderful journey as we strive to provide the highest level of service to our supporters</p>
        <v-btn 
        class="primary"
        large
        >Learn More</v-btn>
      </div>
    </v-container>
  </div>

  <div class="diffrence">
    <div class="text-center pt-16">
      <h3 class=" heading">We care about you health</h3>
      <h1 class="primary--text">Why we are different</h1>
      <p>The below points are what we believe
          sets us apart from any other spas we have in town
      </p>
    </div>
    <div class="pt-16">
      <v-container fluid>
      <div class="d-flex justify-space-between">
        <div class=" items mt-16 mb-12 ">
          <h2 class="primary--text heading mx-16">
            <span class="black--text">01.</span>
            Experienced Specialists
          </h2>
          <p class="mx-16">All of our specialists have been in the field for long and they know what they are doing</p>
        </div>
        <div class=" items mt-16 mb-12 float-right ">
          <h2 class="primary--text heading mx-16">
            <span class="black--text">02.</span>
            Quality of Service
          </h2>
          <p class="mx-16">Our main concern is the satisfactory of our customers and all of our strategies are made to accomodate that</p>
        </div>
      </div>
      <div class="d-flex justify-space-between">
        <div class=" items mt-16 mb-12 ">
          <div>
            
          </div>
          
          <h2 class="primary--text heading mx-16">
            <span class="black--text">03.</span>
            Special Offers
          </h2>
          <p class="mx-16">We also pride ourselves with the special offers we have for our faithful customers like 50% off discount on special holidays</p>
        </div>
        <div class=" items mt-16 mb-12 ">
          <h2 class="primary--text heading mx-16">
            <span class="black--text">04.</span>
            100% safe
          </h2>
          <p class="mx-16">All of the machines we use are 100% safe and scientifically prooven efficient. Our products are also organic</p>
        </div>
      </div>
      </v-container>
    </div>
  </div>
  
  <div class="team py-8">
    <v-container class="text-center">
      <h1 class="primary--text">Our Speacial Team</h1>
      <p>We pride ourselves with the team of young and energetic <br> experts to give you the best service you will always remember</p>

      <v-container class="" fluid>
       
          
        <v-row  class="my-10">
          <v-col lg="7">
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-card
                flat
                class=" mb-6"
                max-width="744"
                max-height="944"
                >
                <v-img
                  src="../assets/img/founder.jpg"
                  height="550px"
                  class="rounded-xl"
                ></v-img>

                <v-fade-transition>
                  <v-overlay
                  v-if="hover"
                  absolute
                  color="black"
                  >
                  <v-btn color="primary" large>See more info</v-btn>
                  </v-overlay>
                </v-fade-transition>       
            </v-card>
              </template>
            </v-hover>
           
          </v-col>
          <v-col lg="5" class="mt-6" >
            <v-carousel
              :show-arrows="false"
              cycle
              class="rounded-xl"
              delimiter-icon="mdi-minus"
              
              >
                <v-carousel-item class="" v-for="team in teams" :key="team.message" >
                  <v-list class="d-flex align-center">
                    <v-list-item 
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
                            <h3 class="primary--text">{{ team.name }}</h3>
                          </v-card-title>
                          <p class="font-weight-light mx-4"> {{team.message}}</p>
                      </v-card>
                    </v-list-item>
                  </v-list>
                </v-carousel-item> 
              </v-carousel>
          </v-col>
        </v-row>
        
      </v-container> 
    </v-container>
  </div>
  

   </div>
</template>

<script>
export default{
    name: 'Header',
    data(){
      return{
          teams:[
            {name:'Mrs Tshepang Lerama', message:'I am very passionate about health and well-being. At Mlex health and beauty spa, i get to learn and practice my passion'},
            {name:'Mrs Tshepang Lerama', message:'I am very passionate about health and well-being. At Mlex health and beauty spa, i get to learn and practice my passion'},
            {name:'Mrs Tshepang Lerama', message:'I am very passionate about health and well-being. At Mlex health and beauty spa, i get to learn and practice my passion'},
            {name:'Mrs Tshepang Lerama', message:'I am very passionate about health and well-being. At Mlex health and beauty spa, i get to learn and practice my passion'},
            {name:'Mrs Tshepang Lerama', message:'I am very passionate about health and well-being. At Mlex health and beauty spa, i get to learn and practice my passion'},
            {name:'Mrs Tshepang Lerama', message:'I am very passionate about health and well-being. At Mlex health and beauty spa, i get to learn and practice my passion'},
           
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
  .section1 span{
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    
  }
  .diffrence{
    background-image: url("../assets/img/pexels-monstera-6621181.jpg");
    background-size: cover;
    position: relative;
    max-width: 100%;
    max-height: 100%;
}

  .team{
    
    background-size: cover;
    position: relative;
  }

  .team h1{
    font-family: 'Playfair Display', serif;
    font-size: 30px;
  }


  
</style>>
  
