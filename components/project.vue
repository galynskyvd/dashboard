<template>
  <div :class="styles">
    <ul class="params">
      <li class="params__item title">
        {{ item.name }}
      </li>
      <li class="params__item">
        Текущая версия: {{ item.lastVersion }}
      </li>
      <li v-if="hasVersions" class="params__item">
        Выбрать версию для скачивания:
        <SelectComponent :items="item.allVersions" @change="updateVersion" />
      </li>
      <li class="params__item">
        <LinkComponent :href="releaseUrl(item)" :color="colors.green">
          Скачать сборку
        </LinkComponent>
        <LinkComponent :href="item.standUrl" :color="colors.blue">
          Перейти на стенд
        </LinkComponent>
      </li>
    </ul>

    <ul v-if="hasTasks" class="params">
      <li class="params__item">
        Список задач:
      </li>
      <li v-for="task in item.tasks" :key="`task-${task.id}`" class="params__item">
        <a target="_blank" :href="task.url">{{ task.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { IProject } from '@/types/project'
import { Colors } from '@/types/colors'
import LinkComponent from '@/components/link.vue'
import SelectComponent from '@/components/select.vue'

@Component({
  components: {
    LinkComponent,
    SelectComponent
  }
})
export default class ProjectComponent extends Vue {
        @Prop({ type: Object, required: true }) item!: IProject;

        selectedVersion: string = '';
        colors = Colors;

        updateVersion (version: string): void {
          this.selectedVersion = version
        }

        releaseUrl ({ lastVersion, storage }: IProject): string {
          if (this.selectedVersion) {
            return `${storage.template}${this.selectedVersion}.${storage.extension}`
          }

          return `${storage.template}${lastVersion}.${storage.extension}`
        }

        get hasTasks (): boolean {
          return this.item.tasks.length > 0
        }

        get hasVersions (): boolean {
          return this.item.allVersions.length > 0
        }

        get styles (): Array<string> {
          const list = ['project']

          if (!this.item.isActive) {
            list.push('in-active')
          }

          return list
        }
}
</script>

<style scoped>
  .project {
    border: 1px solid #bdbdbd;
    border-radius: 4px;
  }

  .project.in-active {
    pointer-events: none;
    opacity: .4;
  }

  .params__item {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    grid-gap: 8px;
    padding: 8px;
    border-bottom: 1px solid #cccccc;
  }

  .params__item.title {
    background: #bdbdbd;
    color: #ffffff;
    min-height: 48px;
  }

  .params:last-child .params__item:last-child {
    border-bottom-width: 0;
  }

  @media (max-width: 768px) {
    .params__item {
      grid-auto-flow: row;
    }
  }
</style>
