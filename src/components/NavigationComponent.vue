<template>
    <aside class="col-aside navigation">
        <h2>Main</h2>
        <ul class="navigation-list">
            <li :class="{ 'selected': $route.name == 'start'}"><router-link :to="{name: 'start'}"><i class="material-icons md-36">home</i><span>Start</span></router-link></li>
            <li :class="{ 'selected': $route.name == 'clients'}"><router-link :to="{name: 'clients'}"><i class="material-icons md-36">people</i><span>Klienci</span></router-link></li>
            <li :class="{ 'selected': $route.name == 'repairs'}"><router-link :to="{name: 'repairs'}"><i class="material-icons md-36">build</i><span>Naprawy</span></router-link></li>
            <li :class="{ 'selected': $route.name == 'cars'}"><router-link :to="{name: 'cars'}"><i class="material-icons md-36">directions_car</i><span>Samochody</span></router-link></li>
        </ul>
    </aside>
</template>

<script>
    export default{
        name: "Navigation",
        data(){
            return{};
        }
    }
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