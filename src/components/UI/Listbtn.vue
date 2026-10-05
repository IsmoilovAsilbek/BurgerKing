<script>
export default {
  props: {
    modelValue: {type: String, default: 'all'}
  },
  emits: ['update:modelValue'],
  data() {
    return {
      items: [
        {id: 'all', label: 'Все'},
        {id: 'burger', label: 'Бургеры'},
        {id: 'snack', label: 'Закуски'},
        {id: 'drink', label: 'Напитки'},
        {id: 'dessert', label: 'Десерты'}
      ]
    }
  }
}
</script>

<template>
  <ul class="listbtn" id="menu">
    <li v-for="item in items" :key="item.id">
      <button
          class="listbtn__btn"
          :class="{'listbtn__btn--active': modelValue === item.id}"
          @click="$emit('update:modelValue', item.id)"
      >{{ item.label }}
      </button>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.listbtn {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  padding: 40px 16px 10px;

  &__btn {
    padding: 12px 26px;
    font-size: 17px;
    color: #111;
    background: #fff;
    border: 3px solid #0a9418;
    border-radius: 4px;
    cursor: pointer;
    transition: background .3s, color .3s, transform .2s;

    &:hover { background: rgba(105, 207, 23, .35); }
    &:active { transform: scale(.95); }

    &--active { background: #0a9418; color: #fff; }
    &--active:hover { background: #0a9418; }
  }
}

@media (max-width: 480px) {
  .listbtn {
    gap: 8px;
    &__btn { padding: 10px 16px; font-size: 15px; }
  }
}
</style>