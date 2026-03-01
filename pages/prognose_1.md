## Prognose

<div class="abs-tl mt-16 ml-10 text-center text-sm">

  <div class="flex justify-around" v-click="0">
    <div class="ml-24 w-34 border-(white 2) rounded p-1">
      pAVK<br>bei Stadium II
    </div>
  </div>

  <div class="flex ml-44 mt-12">
    <div class="flex space-x-86">
      <div class="box before:(line w28 left-30 -rotate-[20deg])" v-click="5">
        <span>5-Jahres -<br>Gesamtprognose</span>
      </div>
      <div class="box before:(line w28 -left-25 rotate-[20deg])" v-click="1">
        <span>5-Jahres<br>Prognose<br>für das Bein</span>
      </div>
    </div>
  </div>

  <div class="flex mt-12 ml-4">
    <div class="flex space-x-26">
      <div class="flex space-x-6">
        <div class="box before:(line w22 left-22 -rotate-[15deg]) highlight" v-click="6">
          <span>35%<br>gefäßbedingte<br>Ereignisse</span>
        </div>
        <div class="box before:(line w-8 left-13 rotate-[90deg])" v-click="11">
          <span>60%<br>ereignisfreies<br>Überleben</span>
        </div>
        <div class="box before:(line w22 -left-10 rotate-[15deg])" v-click="12">
          <span>5%<br>Tod nicht<br>gefäßbedingt</span>
        </div>
      </div>
      <div class="flex space-x-6">
        <div class="box before:(line w12 left-16 -rotate-[30deg])"  v-click="2">
          <span>75%<br>Stabilisation</span>
        </div>
        <div class="box before:(line w12 left-6 rotate-[30deg])"  v-click="3">
          <span>25%<br>Verschlechterung</span>
        </div>
      </div>
    </div>
  </div>

  <div class="flex justify-between mt-12 ml-4">
    <div class="flex space-x-6">
      <div class="box before:(line w-8 left-13 rotate-[90deg]) highlight" v-click="7">
        <span>10%<br>nicht tötliches<br>Ereignis</span>
      </div>
      <div class="box before:(line w-18 -left-12 rotate-[15deg]) highlight" v-click="8">
        <span>25%<br>gefäßbedingter<br>Tod</span>
      </div>
      <bi-heart-pulse-fill class="text-red-400 size-12 my-auto" v-if="$clicks > 8" />
      <file-icons-brainfuck class="text-gray-400 size-12 my-auto" v-if="$clicks > 9"/>
    </div>
    <div class="flex space-x-6">
      <div class="box before:(line w-8 left-13 rotate-[90deg]) highlight" v-click="4">
        <span>2%<br>Amputation</span>
      </div>
    </div>
  </div>
  
</div>

<style>
.slidev-vclick-current.highlight,.slidev-vclick-prior.highlight {
  border-color: red !important;
}
</style>
