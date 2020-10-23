<template>
  <div class="q-form-name q-form-builder-element">
    <div class="row" v-if="getLabel">
      <div class="col-12">
        <label>{{ getLabel }}</label>
      </div>
    </div>
    <div class="row q-col-gutter-sm">
      <div class="col-12 col-md-2"><q-select v-model="innerValue.title" :options="titleOptions" :label="$t('surveys.title')" dense :rules="getRules('title')" :ref="`${id}_title`" /></div>
      <div class="col-12 col-md-4"><q-input v-model="innerValue.first" :label="$t('surveys.first_name')" dense :debounce="debounce" :rules="getRules('first', required)" :ref="`${id}_first`" /></div>
      <div class="col-12 col-md-2"><q-input v-model="innerValue.middle" :label="$t('surveys.middle_name')" dense :debounce="debounce" :rules="getRules('middle')" :ref="`${id}_middle`" /></div>
      <div class="col-12 col-md-4"><q-input v-model="innerValue.last" :label="$t('surveys.last_name')" dense :debounce="debounce" :rules="getRules('last', required)" :ref="`${id}_last`" /></div>
    </div>
    <div class="row" v-if="hint">
      <p class="col-12 text-caption" v-html="hint"></p>
    </div>
  </div>
</template>

<script>
import FormElement from './FormElement'
import { QInput, QSelect } from 'quasar'
export default {
  name: 'NameElement',
  extends: FormElement,
  components: { QInput, QSelect },
  props: {
    value: {
      type: Object,
      default: () => {
        return { title: null, first: null, middle: null, last: null }
      }
    }
  },
  computed: {
    titleOptions () {
      return ['Mr.', 'Mrs.', 'Ms.', 'Dr.']
    }
  }
}
</script>
