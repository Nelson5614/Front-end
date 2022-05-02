
<template>
 <v-app-bar
    style=" padding: 0px 90px"
    app
    elevation="6"
    elevate-on-scroll
    color="white"
    >
    <v-app-bar-title>
        <img
          src="@/assets/img/Screenshot_20220215-185207_Office-removebg-preview.png" 
          alt=""
          height="80"
        >
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="primary--text">
      <v-btn 
      text 
      class="text-capitalize"
      color="primary"
      to="/">
          Home
      </v-btn>
      <v-btn 
      to="/about" 
      class="text-capitalize"
      text>
        About Us
      </v-btn>
     
      <v-menu open-on-hover offset-y transition="slide-x-transition" bottom right>
          <template v-slot:activator="{ on, attrs }">
              <v-btn text class="text-capitalize" v-bind="attrs" v-on="on">
                  Spa
              <v-icon right>mdi-chevron-down</v-icon>
              </v-btn>
          </template>
          <v-list dense>
              <v-list-item v-for="(item, index) in spa" :key="index" router :to="item.link" color="primary">
                  <v-list-item-action>
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item-action>
              </v-list-item>
          </v-list>
      </v-menu>
      <v-btn
       to="/shop" 
       text
       class="text-capitalize"
       >
          Shop
      </v-btn>
      <v-btn 
      to="/blog" 
      text
      class="text-capitalize"
      >
          Blog
      </v-btn>
      <v-btn
       to="/contact" 
       text
       class="text-capitalize"
       >
          Contact Us
      </v-btn>
    <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            v-bind="attrs"
            v-on="on"
            text
          >
          <v-icon>mdi-cart</v-icon>
          </v-btn>
        </template>
        <span>Cart</span>
      </v-tooltip>
    <v-menu open-on-hover transition="slide-x-transition" bottom right offset-y>
      <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
              <v-icon color="primary" icon>mdi-account</v-icon>
          </v-btn>
      </template>
      <v-card class="mx-auto" max-width="300" tile>
          <v-list dense>
              <v-subheader>Account</v-subheader>
              <v-list-item-group v-model="account" color="primary">
                  <v-list-item v-for="(item, i) in accounts" :key="i" router :to="item.link" color="primary">
                      <v-list-item-action>
                          <v-icon v-text="item.icon"></v-icon>
                      </v-list-item-action>
                      <v-list-item-action>
                          <v-list-item-title v-text="item.text"></v-list-item-title>
                      </v-list-item-action>
                  </v-list-item>
              </v-list-item-group>
          </v-list>
      </v-card>
    </v-menu>
    </v-toolbar-items>
   
  
</v-app-bar>
</template>

<script>
export default {
    data: () => ({
        activate: true,
        account: 1,
        accounts: [{
                text: "Login",
                icon: "mdi-login",
                link:"/login"
            },
            {
                text: "Register",
                icon: "mdi-account-plus",
                link:"/register"
            }
        ],
        mini: true,
        spa: [{
                
                title: "Massage Services",
                link: "/massages"
            },
            {
                
                title: "Body Services",
                link: "/body-services"
            },
            
        ]
    })
};
</script>