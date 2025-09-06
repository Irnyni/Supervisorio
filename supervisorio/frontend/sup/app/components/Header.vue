<template>
<nav class="navbar">
    <ul class="navlist">
        <li class="logo-item"> <a  href="/"><img src="/img1.png" alt="" class="logo"></a></li>
        <li>HOME</li>
        <li>SOBRE</li>
        <li>PRODUTOS</li>
    
    </ul>

</nav>



</template>

<script setup>

</script>

<style scoped>
.navbar{

    color: rgb(0, 0, 0);
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 20px;
    font-weight: bolder;

    border: 0.2px solid black;
     box-shadow: -5px 5px 20px 0px rgba(0, 0, 0, 0.4);
}
.navlist{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content:end;
    align-items:center ;
    gap: 50px;
    list-style-type: none;
    margin-right: 20px;

}
.logo {

max-height: 70px;


}

.logo-item {
    margin: 10px;
margin-right: auto;

}


</style>