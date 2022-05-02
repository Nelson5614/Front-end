<template>
    <v-container fluid>
        <v-form @submit.prevent="handleSubmit">
            <v-row>
                <v-col lg="12">
                <v-card 
                class="mx-auto my-12"
                max-width="700"
                outlined
                >
                <v-col lg="12">
                    <h1 class="text-center mt-4">Sign Up to MlexBeautySpa</h1>
                    <v-btn
                    style="width: 370px"
                    class="rounded-xl blue white--text d-flex mx-auto my-4 text-capitalize"
                    medium
                    dense
                    outlined
                    
                    >
                    Continue with Google
                </v-btn>
                </v-col>
                <span class="d-flex justify-center">or</span>
                <v-divider/>
                <v-row class="mt-16 mx-12">
                    <v-col lg="6">
                        
                            <v-text-field
                            dense
                            label="First Name"
                            outlined
                            v-model="first_name"

                            ></v-text-field>
                        
                    </v-col>
                    <v-col lg="6">
                        
                            <v-text-field
                            dense
                            label="Last Name"
                            outlined
                            v-model="last_name"
                            ></v-text-field>
                        
                    </v-col>
                </v-row>
                <v-col lg="12" class="">
                    
                        <v-text-field
                        outlined
                        label="Email"
                        dense
                        class="mx-12"
                        v-model="email"
                        ></v-text-field>

                        <v-text-field
                        outlined
                        label="Password"
                        dense
                        class="mx-12"
                        v-model="password"
                        ></v-text-field>
                    
                        <v-btn
                        medium
                        class="rounded-xl primary white--text d-flex mx-auto text-capitalize"
                        style="width: 570px"
                        @click="handleSubmit"
                        > Create my account
                        </v-btn>
                        <div class="d-flex justify-center my-8">
                        <span class="text-capitalize font-italic text-center caption">Already have an account?</span>
                        <v-btn to="/login" text small color="primary" class="text-capitalize mt-n1">Login</v-btn>
                        </div>
                    
                </v-col>
                </v-card>
                </v-col>
            </v-row>
        </v-form>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            first_name:'',
            last_name:'',
            email:'',
            password:''

        }
    },

    methods:{
        handleSubmit(){
            const data = {
                first_name: this.first_name,
                last_name: this.last_name,
                email: this.email,
                password:this.password
            }
            console.log(data);
        }
    }
}
</script>