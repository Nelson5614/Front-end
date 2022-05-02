<template>
<div>
  <div class="hero py-16 pl-16 ">
    <h3 class="pt-12">WELCOME TO MLEX BEAUTY SPA</h3>
    <div class="pl-16 ">
      <h1 class="secondary--text ml-16">RELAX</h1> 
      <h1 class="primary--text ml-16">RENEW</h1>
      <h1 class="primary--text ml-16">REFRESH</h1>
    </div>

    <div class="ml-16 mt-4">
      <v-btn
      color="white dark--text"
      class="ml-8"
      large
      >
        BOOK NOW
      </v-btn>
      <v-btn
      color="primary white--text"
      class="ml-8"
      large
      >
        <v-icon>mdi-arrow-right-drop-circle-outline</v-icon>
          WATCH VIDEO
      </v-btn>
    </div>
    <div class=" ml-16">
      <div class="ml-16">
        <v-btn class="mt-12 ml-4 " icon color="white">
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
        <v-btn class="mt-12 ml-4 " icon color="white">
          <v-icon>mdi-whatsapp</v-icon>
        </v-btn> 
        <v-btn class="mt-12 ml-4 " icon color="white">
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
        src="@/assets/img/lemon-g61baf9fb0_1920.jpg"
        contain
        max-height="100%"
        max-width="50%"
      > 
      </v-img>
      <div class="px-16 mt-12">
        <h3 class="green--text">Welcome to MlexBeautySpa</h3>
        <h1 class="primary--text ">Incredible & <br> Relaxiable spa</h1>
        <p class="mt-4">Mlex Beauty Spa started as an ambitious idea to promoting the good health and building the body shape, retaining self confidence and reclaiming your youth. As the business flourish our efforts has been successfully supported by the same community we love, and it has been a wonderful journey as we strive to provide the highest level of service to our supporters</p>
        <v-btn 
        class="primary"
        large
        >Learn More</v-btn>
      </div>
    </v-container>
  </div>

  <div class="services">
     <v-container class="my-8">
       <h1 class="primary--text text-center">Our Services</h1>
      <p class="text-center">Here are some of the services we offer here at Mlex Beauty Spa</p>
        <v-row justify="center" class="mt-6" >
          <v-col cols="4" v-for="service in services" :key="service.tittle">
            <v-layout row >
              <v-card
              class="mx-auto"
              max-width="344"
              >
                <img
                  :src="getImgUrl(service.src)" 
                  :alt="service.src"
                  height="200px"
                />

                <v-card-title>
                  {{ service.tittle }}
                </v-card-title>

                <v-card-subtitle>
                  {{ service.message }}
                </v-card-subtitle>
                <v-btn
                text
                color="success"
                large
                >
                {{ service.price }}
                </v-btn>

                <v-card-actions>
                  <v-btn
                    color="primary lighten-2"
                    text
                  >
                    Explore
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-layout>
              
          </v-col>
        </v-row>
      </v-container> 
  </div>

  <div class="diffrence">
    <div class="text-center pt-16">
      <h3 class="green--text heading">We care about you health</h3>
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
            <span class="green--text">01.</span>
            Experienced Specialists
          </h2>
          <p class="mx-16">All of our specialists have been in the field for long and they know what they are doing</p>
        </div>
        <div class=" items mt-16 mb-12 float-right ">
          <h2 class="primary--text heading mx-16">
            <span class="green--text">02.</span>
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
            <span class="green--text">03.</span>
            Special Offers
          </h2>
          <p class="mx-16">We also pride ourselves with the special offers we have for our faithful customers like 50% off discount on special holidays</p>
        </div>
        <div class=" items mt-16 mb-12 ">
          <h2 class="primary--text heading mx-16">
            <span class="green--text">04.</span>
            100% safe
          </h2>
          <p class="mx-16">All of the machines we use are 100% safe and scientifically prooven efficient. Our products are also organic</p>
        </div>
      </div>
      </v-container>
    </div>
  </div>

  <div class="offers">
    <div class="d-flex">

    <v-img 
      src="@/assets/img/ezgif.com-gif-maker (1).jpg"
      contain
      max-height="100%"
      max-width="50%"
    > 
    </v-img>
    <div class=" mt-16 pt-16 mx-12 text-center">
      <h3 class="green--text">Special offers</h3>
      <h1 class="primary--text">Easter Special!</h1>

      <p>Get 50% off dicount in all of our massage service and check our facebook page for more offers</p>

      <v-btn
      class="primary white--text"
      large
      >
        Learn More
      </v-btn>
    </div>
    </div>
  </div>

  <div class="testimonials mt-12 secondary">
    <div class="text-center">
    <h3 class="green--text">Testimonials</h3>
    <h1 class="primary--text">Our client's expresion</h1>
    <p>Let us share with you what some of our clients say about us</p>
    </div>

    <v-container class="">
      <v-row justify="center" >
        <v-col lg="12">
          <v-carousel
          cycle
          hide-delimiter-background
          show-arrows-on-hover
          class=""
          >
          <v-carousel-item v-for="testimonial in testimonials" :key="testimonial.message">
            <v-layout row>
              <v-spacer/>
              <v-card flat>
                <v-flex class="message text-center mt-12 mx-16" >
                  <v-avatar
                color="primary"
                size="62"
                class="white-text my-4"
                >
                {{ testimonial.ava }}
                </v-avatar>
                <p class="" >{{testimonial.message}}</p>
                <h3> {{ testimonial.name }} </h3>
               <v-rating
               :value="4.5"
               dense
               half-increments
               size="16"
               color="primary"
               ></v-rating>
                </v-flex>
              </v-card>
              <v-spacer/>
            </v-layout>
          </v-carousel-item>
      </v-carousel>
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
        checkbox: false,

        services:[
          {tittle:'Nails & Makeup',message:'Get your make-up and nails done for any speacial occasion you would want to attend', src:"ezgif-2-7d98af0dc0.jpg", price:'M100.00'},
          {tittle:'Massage Services',message:'We offer a full body massage, deep tissue masssage, swidish massage and many more.', src:"ezgif-2-7d98af0dc0.jpg', price:'M350.00"},
          {tittle:'Body Services', message:'We offer foot detox services, tummy reduction, butt enlargement and many others', src:"ezgif-2-7d98af0dc0.jpg', price:'M500.00"}
        ],

        testimonials:[
          {ava:'TL', message:'Becuase of its capability to enhance the bodys own natural detoxification abilities, our clients find this service very healthy and important', name:'Miss Tshepang Lerama'},
           {ava:'SH', message:'Becuase of its capability to enhance the bodys own natural detoxification abilities, our clients find this service very healthy and important', name:'Miss Seboka Hashatsi'},
           {ava:'MM', message:'Becuase of its capability to enhance the bodys own natural detoxification abilities, our clients find this service very healthy and important', name:'Miss Molefi Marake'},
        ],

      }
    },
    methods: {
      getImgUrl: function(imagePath){
        return require('@/assets/img' + imagePath);
      }
    },
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,500&family=Poppins:wght@100;400;700&display=swap');

.hero{
  position:relative ;
  background-image: url("@/assets/img/ezgif-2-72d82e8d6d.jpg");
  background-size: cover;
  height: 100%;

  
}

.hero h3{
  font-family: 'Playfair Display', serif;
  color:white;
  font-size: 30px;
  
}
.hero h1{
  
  font-size: 50px;
  font-weight: bold;
  
  
}

.introductory h1{
  font-family: 'Playfair Display', serif;
}

.services h1{
  font-family: 'Playfair Display', serif;
  
}
.diffrence{
  background-image: url("@/assets/img/pexels-monstera-6621181.jpg");
  background-size: cover;
  position: relative;
  max-width: 100%;
  max-height: 100%;
}
.diffrence h1{
  font-family: 'Playfair Display', serif;
  
}

.items{
 width: 400px;
}

.message{
 width: 400px;
}

.offers h1{
  font-family: 'Playfair Display', serif;
  
}

.testimonials h1{
  font-family: 'Playfair Display', serif;
  
}


.footer h1{
   font-family: 'Playfair Display', serif;
   
}

</style>>
