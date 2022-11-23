<template>
    <div v-if="character" class="card-container" :key="character.id">
        <div class="upper-container">
            <div class="image-container">
                <img :src="character.image" alt="character image">
            </div>
        </div>
        <div class="lower-container">
            <div class="info">Name: <h3>{{ character.name }}</h3>
            </div>
            <div class="info">status: <h4>{{ character.status }}</h4>
            </div>
            <div class="info">species: <h4>{{ character.species }}</h4>
            </div>
            <div class="info">gender: <h4>{{ character.gender }}</h4>
            </div>
            <div class="info-location">location: <h4>{{ character.location.name }}</h4>
            </div>
            <div class="info-footer">
                <h5>{{ character.created }}</h5>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "characterCard",
    props: ["character"]

}
</script>

<style  scoped>
.card-container {
    width: 250px;
    height: 330px;
    background-color: #fff;
    border-radius: 4px;
    top: 50%;
    left: 50%;
    box-shadow: 0px 1px 10px 1px rgb(0, 0, 0);
    overflow: hidden;
}

.card-container:hover {
    box-shadow: 0px 1px 10px 1px #EBC7E8;
    cursor: pointer;
    transform: translate(1px, -3px);
}

.upper-container {
    height: 30%;
    background: #7f00ff;

}

.lower-container {
    height: 70%;
    background: #fff;
    padding: 20px;
    padding-top: 30px;

}

.lower-container div {
    /* font-size: 10px; */
    line-height: .3;
    font-weight: bold;

}

.lower-container h4 {
    color: #645CAA;
    ;
    line-clamp: 5px;
    word-break: 5px;

    opacity: .6;
    font-weight: bold;

}

.info {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 15px;
    height: 25px;
    flex-wrap: wrap;
}

.info-location {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-size: 15px;
    margin-top: 15px;
    flex-wrap: wrap;
    border:

}

.info-footer {
    display: flex;
    justify-content: flex-end;
    height: 20px;
}

.image-container {
    background: white;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    padding: 5px;
    transform: translate(80%, 30%);
}


.image-container img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
</style>