<template>
    <main>
    <div class="delete-window" v-if="show == true">
        <h1>{{message}}</h1>
        <button @click="deleteCard">Delete Card</button>
        <button @click="$emit('close')">Close</button>
        
    </div>
    <div class="hide" v-if="show == true" @click="$emit('close')"></div>
    </main>

</template>

<script>
    export default {
        props:{
            show: Boolean,
            card: Object
        },
        data(){
            return{
                message: "Are you sure you want to delete"
            }
        },
        methods:{
            deleteCard(){
                this.$store.dispatch('removeThisCard', this.card.id)
                this.$emit('close')
                
            }  
        }          
    }
</script>

<style lang="scss" scoped>
.delete-window{
z-index: 5;
width: 50%;
background-color: white;
position:fixed ;
font-style: white;
display: flex;
flex-direction: column;
top:25%;
right: 25%; 
bottom:25%;
left: 25%;
border-radius: 2rem;
h1{
    align-self:center;
    padding: 2%;
    font-size: 1.2rem;
}
button{
    width: 80%;
    align-self: center;
    margin-bottom: .1rem; 
}
}
.hide{
    z-index: 1;
    top:0;
    right: 0;
    bottom:0;
    left: 0;
    position: fixed;
    background-color: #333;
    

}

</style>