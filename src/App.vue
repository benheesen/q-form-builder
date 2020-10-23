<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          QuestionaireBuilder
        </q-toolbar-title>
        <div>quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page>
        <q-btn icon="star" @click="PreviewDialog = true">Preview</q-btn>
        <!-- form building -->
        <q-form-builder v-model="fields" />

        <q-separator />
        <q-dialog v-model="PreviewDialog" maximized>
          <q-card class="bg-white">
            <q-btn v-close-popup icon="cancel" />
            <!-- form rendering -->
            <div class="q-pa-md q-form-container">
              <h4>{{ $t('surveys.preview') }}</h4>
              <div v-for="(field, index) in fields" :key="index">
                <component v-model="fieldData[field.cid]" @input="onInput" v-bind:is="getElement(field)" :label="field.label" :required="field.required" :field_options="field.field_options" :id="field.cid" :cid="field.cid" :ref="field.cid" debounce="500" />
              </div>
            </div>
          </q-card>
        </q-dialog>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>

import { QFormBuilder, TextElement, ParagraphElement, CheckboxesElement, RadioElement, DateElement, TimeElement, DropdownElement, EmailElement, NameElement, SimpleNameElement, AddressElement, PhoneElement, FileElement, PaymentElement, TermsElement, PageBreakElement, SectionBreakElement } from '@/components/index'

export default {
  name: 'SampleApp',
  components: {
    QFormBuilder,
    TextElement,
    ParagraphElement,
    CheckboxesElement,
    RadioElement,
    DateElement,
    TimeElement,
    DropdownElement,
    EmailElement,
    NameElement,
    SimpleNameElement,
    AddressElement,
    PhoneElement,
    FileElement,
    PaymentElement,
    TermsElement,
    PageBreakElement,
    SectionBreakElement
  },
  data () {
    return {
      PreviewDialog: false,
      fields: [],
      fieldData: [],
      sourceFields: {
        required: false,
        default () {
          return [
            { type: 'text', icon: 'text_format', label: this.$t('surveys.text') },
            { type: 'paragraph', icon: 'text_fields', label: this.$t('surveys.paragraph') },
            { type: 'checkboxes', icon: 'check_box', label: this.$t('surveys.checkboxes') },
            { type: 'radio', icon: 'radio_button_checked', label: this.$t('surveys.multiple_choice') },
            { type: 'date', icon: 'event', label: this.$t('surveys.date') },
            { type: 'time', icon: 'access_time', label: this.$t('surveys.time') },
            { type: 'dropdown', icon: 'arrow_drop_down', label: this.$t('surveys.dropdown') },
            { type: 'email', icon: 'email', label: this.$t('surveys.email') },
            { type: 'name', icon: 'person', label: this.$t('surveys.name') },
            { type: 'simple_name', icon: 'person_outline', label: this.$t('surveys.simple_name') },
            { type: 'address', icon: 'home', label: this.$t('surveys.address') },
            { type: 'phone', icon: 'phone', label: this.$t('surveys.phone') },
            { type: 'file', icon: 'cloud_upload', label: this.$t('surveys.file_upload') },
            { type: 'payment', icon: 'payment', label: this.$t('surveys.payment') },
            { type: 'terms', icon: 'ballot', label: this.$t('surveys.terms') },
            { type: '' },
            { type: '' },
            { type: '' },
            { type: 'section_break', icon: 'view_agenda', label: this.$t('surveys.section_break') },
            { type: 'page_break', icon: 'call_to_action', label: this.$t('surveys.page_break') }
          ]
        }
      }
    }
  },
  methods: {
    /**
     * When a value is input into the rendered form, echo it to the debug line
     */
    onInput (val, id) {
      // console.debug(`${id}: ` + JSON.stringify(val))
    },
    /**
     * Determine the name of the Element object based on the 'field_type' of the field data object
     */
    getElement (field) {
      const nameParts = field.field_type.split('_')
      for (let i = 0; i < nameParts.length; i++) {
        nameParts[i] = nameParts[i].charAt(0).toUpperCase() + nameParts[i].slice(1)
      }
      return nameParts.join('') + 'Element'
    }
  },
  watch: {
    fields: {
      handler (val) {
        // console.debug(val)
      },
      deep: true
    }
  }
}
</script>

<style lang="stylus">
  .q-form-container
    max-width 820px
    margin auto
</style>
