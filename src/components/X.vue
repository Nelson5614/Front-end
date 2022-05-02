<template>
     <div class="footer">
    <v-container class="my-12 " >
      <v-row>
        <v-col cols="4">
          <h2 class="primary--text">Contact Info</h2>
          <h3 class="my-2">Address</h3>
          <span>Police Europa,<br>
            Maseru 100
          </span>
          <h3 class="my-2">Phone</h3>
          <span>+266 56 230 279 <br>
                +266 63 209 170
          </span>
        </v-col>
        <v-col cols="4">
          <h2 class="primary--text">Quick Links</h2>
          <v-list link v-for="link in footerlinks" :key="link.tittle" :to="link.route">
            <v-list-item-title> {{ link.tittle }} </v-list-item-title>
          </v-list>
        </v-col>
        <v-col cols="4">
          <h2 class="primary--text">Oparating Hours</h2>
          <h3 class="my-2">Monday-Friday</h3>
          <span>6:00AM - 7:00PM</span>
          <h3 class="my-2">Sarturday to Sunday</h3>
          <span>6:00AM - 3:00PM</span> <br>
          <v-btn 
          color="secondary"
          large
          class="white--text my-4 text-capitalize"
          >
            Book now
          </v-btn>
        </v-col>        
      </v-row>
    </v-container> 
    <v-footer class="px-12 py-4 caption primary font-weight-bold">
      <v-spacer/>
      &copy; {{ new Date().getFullYear() }} - mlexbeautyspa.co.ls designed with 
      <v-icon color="white">mdi-heart</v-icon> 
      by Nelson Mathebeng
      <v-spacer/>
      
    </v-footer> 
  </div>
</template>

<script>
export default{
    data(){
        return{
            
        footerlinks:[
          {tittle:'About', route:'about'},
          {tittle:'Spa Services', route: 'services'},
          {tittle:'Our Expects', route:'experts'},
          {tittle:'Packages', route:'packages'},
          {tittle:'Contact', route:'contact'},
        ]
        }
    }
}
</script>
