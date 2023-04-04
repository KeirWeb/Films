<!-- <template>
  <div
    class="similarFilms"
    v-for="similarFilm in similarFilms"
    :key="similarFilm.filmId"
  >
    <div class="similarFilms__title">
      {{ similarFilm.nameRu }}
    </div>

    <img
      class="similarFilms__preview"
      :src="similarFilm.posterUrlPreview"
      alt=""
    />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      similarFilms: {},
    };
  },

  created() {
    axios
      .get(
        "https://kinopoiskapiunofficial.tech/api/v2.2/films/" +
          this.$route.params.id +
          "/similars",
        {
          method: "GET",
          headers: { "X-API-KEY": "cd590928-7379-47a9-a2c1-e1be008d72f1" },
        }
      )
      .then((response) => (this.similarFilms = response.data.items))
      .then((response) => console.log(response.data.items));
    // .tehen(
    //   (response) => (this.similarFilms = response.data.items),
    //   console.log(this.similarFilms)
    // );
  },
};
</script>

<style scoped lang="scss">
.similarFilms {
  display: flex;
  flex-direction: column;

  &__title {
  }

  &__preview {
    overflow-clip-margin: content-box;
    overflow: clip;
    width: 150px;
    aspect-ratio: auto 150 / 250;
    height: 250px;
  }
}
img {
}
</style> -->
