<template>
  <div class="flex pa1 justify-between nowrap orange">
    <div class="flex flex-fixed black">
      <div class="fw7 mr1">Moje Filmy</div>
      <ul class="navigation-list">
       <!--<li :class="{ 'selected': $route.name == 'start'}"><router-link :to="{name: 'list'}"><i class="material-icons md-36">home</i><span>Start</span></router-link></li>-->
        <li :class="{ 'selected': $route.name == 'list'}"><router-link :to="{name: 'list'}"><i class="material-icons md-36">Lista </i><span>filmów</span></router-link></li>
        <li :class="{ 'selected': $route.name == 'create'}"><router-link :to="{name: 'create'}"><i class="material-icons md-36">dodaj </i><span>film</span></router-link></li>
        <!--<li><router-link to="/list" class="ml1 no-underline black">Moja lista filmów</router-link></li>
        <li><router-link to="/create" class="ml1 no-underline black">Dodaj nowy film</router-link></li>-->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader"
};
</script>
<style lang="scss" scoped>
    @import "../styles/variables";
    .navigation{
        background: $navigation-background;
        color: $navigation-color;
        font-family: Roboto-Bold;
        text-transform: uppercase;
        flex-direction: column;
        padding-top: 30px;
        font-size: 1.25em;
        border-bottom: 10px solid $distinction-color;

        h2{
            text-align: center;
            padding-bottom: 30px;
        }

        .navigation-list{
            
            li{
                a{
                    color: $navigation-color;
                    display: block;
                }
                padding: 15px;
                cursor: pointer;
                transition: all 0.5s;
                i{
                    vertical-align: middle;
                    padding-right: 10px;
                }
                span{
                    display:inline-block;
                    vertical-align: middle;
                    padding-top: 2px;
                }

                &.selected, &:hover{
                    background:$navigation-selected-background;
                    border-left: 10px solid $distinction-color;
                    transition: all 0.5s;
                    i{
                        color: $distinction-color;
                    }
                    span{
                        color: $navigation-selected-color;
                    }
                }
            }
        }
    }
</style>