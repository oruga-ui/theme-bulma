<script setup lang="ts">
import { reactive, ref } from "vue";

const carousels = [
  { text: "Slide 1", color: "#445e00" },
  { text: "Slide 2", color: "#006724" },
  { text: "Slide 3", color: "#b60000" },
  { text: "Slide 4", color: "#f4c300" },
  { text: "Slide 5", color: "#005c98" },
];

const items = [
  {
    title: "Slide 1",
    image: "https://picsum.photos/id/1/1230/500",
  },
  {
    title: "Slide 2",
    image: "https://picsum.photos/id/2/1230/500",
  },
  {
    title: "Slide 3",
    image: "https://picsum.photos/id/3/1230/500",
  },
  {
    title: "Slide 4",
    image: "https://picsum.photos/id/4/1230/500",
  },
  {
    title: "Slide 5",
    image: "https://picsum.photos/id/5/1230/500",
  },
  {
    title: "Slide 6",
    image: "https://picsum.photos/id/6/1230/500",
  },
  {
    title: "Slide 7",
    image: "https://picsum.photos/id/7/1230/500",
  },
];

const carousel = ref(1);
const listSettings = reactive({
  arrows: true,
  arrowsHover: true,
  dragable: true,
  itemsToShow: 4,
  itemsToList: 1,
  repeat: false,
});

const gallery = ref(false);
const indicatorsSettings = reactive({
  indicators: false,
  itemsToShow: 2,
  breakpoints: {
    768: {
      itemsToShow: 4,
    },
    960: {
      itemsToShow: 6,
    },
  },
});

function switchGallery(value: boolean): any {
  gallery.value = value;

  if (value) {
    document.documentElement.classList.add("o-clipped");
  } else {
    document.documentElement.classList.remove("o-clipped");
  }
}

const customSettings = reactive({
  dragable: false,
  autoplay: false,
  pauseHover: false,
  interval: 3000,
  repeat: false,
  position: "bottom",
  style: "dots",
});
</script>

<template>
  <section>
    <h2>Carousel Demo</h2>
    <hr />
  </section>

  <section class="py-4 container">
    <h3>Base</h3>

    <o-carousel>
      <o-carousel-item v-for="(carousel, i) in carousels" :key="i">
        <section
          class="ex-slide"
          :style="{ 'background-color': carousel.color }">
          <h1>{{ carousel.text }}</h1>
        </section>
      </o-carousel-item>
    </o-carousel>
  </section>

  <section class="py-4 container">
    <h3>Carousel List</h3>

    <div class="example-component">
      <o-field grouped group-multiline>
        <o-field>
          <o-switch v-model="listSettings.arrows" label="Arrow" />
        </o-field>
        <o-field>
          <o-switch
            v-model="listSettings.arrowsHover"
            :disabled="!listSettings.arrows"
            label="Arrow on hover" />
        </o-field>
        <o-field>
          <o-switch v-model="listSettings.dragable" label="Drag event" />
        </o-field>
        <o-field>
          <o-switch v-model="listSettings.repeat" label="Repeat" />
        </o-field>
      </o-field>
      <o-field grouped group-multiline>
        <o-field label="Items to Show">
          <o-input
            v-model.number="listSettings.itemsToShow"
            type="number"
            min="1"
            :max="items.length" />
        </o-field>
        <o-field label="Items to List">
          <o-input
            v-model.number="listSettings.itemsToList"
            type="number"
            min="1"
            :max="items.length - 1" />
        </o-field>
      </o-field>
    </div>
    <o-carousel v-model="carousel" v-bind="listSettings">
      <o-carousel-item v-for="(item, i) in items" :key="i">
        <img :src="item.image" />
      </o-carousel-item>
    </o-carousel>
    <p><b>Current Item:</b> {{ carousel }}</p>
  </section>

  <section class="py-4 container">
    <h3>Custom As indicators</h3>

    <o-carousel
      :autoplay="false"
      :overlay="gallery"
      @click="switchGallery(true)">
      <o-carousel-item v-for="(item, i) in items" :key="i">
        <a class="image">
          <img :src="item.image" />
        </a>
      </o-carousel-item>
      <template #indicators="{ active, switchTo }">
        <o-carousel
          :model-value="active"
          v-bind="indicatorsSettings"
          @update:model-value="switchTo($event)">
          <o-carousel-item
            v-for="(item, i) in items"
            :key="i"
            clickable
            item-class="img-indicator"
            item-active-class="img-indicator-active">
            <img :src="item.image" />
          </o-carousel-item>
        </o-carousel>
      </template>
      <template #overlay>
        <button
          type="button"
          class="btn-close ex-close-icon"
          aria-label="Close"
          @click="switchGallery(false)" />

        <div style="color: #ffffff; text-align: center">
          Hello, I'm an overlay!
        </div>
      </template>
    </o-carousel>
  </section>

  <section class="py-4 container">
    <h3>Custom</h3>

    <div class="example-component">
      <o-field grouped group-multiline>
        <o-field>
          <o-switch v-model="customSettings.autoplay" label="Autoplay" />
        </o-field>
        <o-field>
          <o-switch
            v-model="customSettings.pauseHover"
            :disabled="!customSettings.autoplay"
            label="Pause on hover" />
        </o-field>
        <o-field>
          <o-switch v-model="customSettings.dragable" label="Drag event" />
        </o-field>
        <o-field>
          <o-switch
            v-model="customSettings.repeat"
            :disabled="!customSettings.autoplay"
            label="Repeat" />
        </o-field>
      </o-field>
      <o-field grouped group-multiline>
        <o-field label="Value">
          <o-input
            v-model.number="carousel"
            type="number"
            min="0"
            :max="carousels.length - 1" />
        </o-field>
        <o-field label="Interval">
          <o-input
            v-model.number="customSettings.interval"
            type="number"
            min="0"
            step="1000"
            :disabled="!customSettings.autoplay" />
        </o-field>
        <o-field label="Indicator Position">
          <o-select v-model="customSettings.position">
            <option value="top">top</option>
            <option value="bottom">bottom</option>
          </o-select>
        </o-field>
        <o-field label="Indicator Style">
          <o-select v-model="customSettings.style">
            <option value="boxes ">boxes</option>
            <option value="dots">dots</option>
            <option value="lines ">lines</option>
          </o-select>
        </o-field>
      </o-field>
    </div>

    <o-carousel
      v-model="carousel"
      v-bind="customSettings"
      :indicator-position="customSettings.position"
      indicator-inside
      :indicator-style="customSettings.style">
      <o-carousel-item v-for="(slide, i) in carousels" :key="i">
        <section class="ex-slide" :style="{ 'background-color': slide.color }">
          <h1>{{ slide.text }}</h1>
          <o-input :placeholder="slide.text" />
          <p>A link that <a href="#arrow">goes to arrow</a></p>
        </section>
      </o-carousel-item>
    </o-carousel>
  </section>
</template>

<style lang="scss" scoped>
.container {
  max-width: 80vw;
}
.ex-slide {
  padding: 9rem 4.5rem;
  color: #ffffff;
  text-align: center;
}
img {
  display: block;
  height: auto;
  width: 100%;
  max-width: 100%;
}
.img-indicator {
  filter: grayscale(100%);
}
.img-indicator-active {
  filter: grayscale(0%);
}
.ex-close-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  filter: var(--bs-btn-close-white-filter);
}
</style>
