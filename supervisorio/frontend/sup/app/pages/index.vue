<template>
 <div class="conteudo">
        <nav>
          <ul class="barra_lateral">
            <li>Dashboard</li>
            <li>Clientes</li>
            <li>Detalhes</li>
            <li>Mapa</li>
          
        </ul>
        </nav>

    <div class="mapa">
      <Map/>
    
    </div>
      </div>
</template>

<script setup>

</script>

<style >

.conteudo{
min-height: 100vh;
    background-color: rgb(235, 230, 230);
  display: flex;
 justify-content: flex-start;
}
.barra_lateral{
    display: flex;
    background-color: #5c0b0b;
    flex-direction: column;
    width: 90%;
    justify-content:space-around;
    list-style-type: none;
    border:1px solid #5c0b0b;
    transition: background-color 0.7s ease-in-out;
    color: #ffffff;
    font-size: 31px;
    padding: 70px;
    height: 80%;
    box-shadow: -5px 5px 15px 0px rgba(0, 0, 0, 0.9);
}
.barra_lateral:hover{
   
    background-color: #ffffff;
    flex-direction: column;
    width: 90%;
  transition: background-color 0.4s ease-in-out;
   
    color: #5c0b0b;
    font-size: 31px;
    padding: 71px;
    height: 80%;
    box-shadow: -5px 5px 15px 0px rgba(0, 0, 0, 0.9);

  
}
.mapa{width: 100%;
height:1000px
}
</style>