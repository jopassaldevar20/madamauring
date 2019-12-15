<template>
    <BaseCard class="add_pattern_wrapper">
        <div class="ap__label_input">
            <p>PATTERN</p>

            <div class="li_input_button">
                <input maxlength="10" v-model="pattern" />

                <div class="base_button blue" @click="addPattern">
                    <p>Add</p>
                </div>
            </div>
        </div>

        <div class="ap__existed_edit">
            <p>EXISTED</p>

            <div class="ee__pattern_status">
                <div class="ps__label_value lv__pattern">
                    <p>PATTERN</p>

                    <div>
                        <p>{{ savedPattern }}</p>
                    </div>
                </div>

                <div class="ps__label_value lv__up">
                    <p>UP</p>

                    <div>
                        <p>{{ addZeros(savedUp) }} (<span>+{{ upPlus }}</span>)</p>
                    </div>
                </div>


                <div class="ps__label_value lv__down">
                    <p>DOWN</p>

                    <div>
                        <p>{{ addZeros(saveDown) }} (<span>+{{ downPlus }}</span>)</p>
                    </div>
                </div>
            </div>

            <div class="ee__buttons_section">
                <div class="bs__edit_buttons">
                    <div class="base_button orange" @click="addUp">
                        <p>ADD UP</p>
                    </div>

                    <div class="base_button orange" @click="addDown">
                        <p>ADD DOWN</p>
                    </div>

                    <div class="base_button orange" @click="resetValues">
                        <p>RESET</p>
                    </div>
                </div>

                <div class="base_button blue" @click="saveChanges">
                    <p>SAVE</p>
                </div>
            </div>
        </div>
    </BaseCard>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';

import BaseCard from '@/components/BaseCard';

export default {
    name: 'AddPattern',

    components: {
        BaseCard
    },

    data () {
        return {
            isExist: false,
            pattern: '',
            savedRowNumber: 0,
            savedPattern: 'XXXXXXXXXX',
            savedUp: 0,
            saveDown: 0,
            upPlus: 0,
            downPlus: 0
        };
    },

    methods: {
        ...mapMutations(['updateToast', 'updateBlockUi']),

        ...mapActions(['appendNewPattern', 'isPatternExist', 'updatePattern']),

        addZeros (num) {
            let numStr = num.toString();

            while (numStr.length < 3) {
                numStr = `0${numStr}`;
            }

            return numStr;
        },

        async addPattern () {
            this.updateBlockUi({ blockUi: true });

            if (this.pattern.length === 10) {
                const exist = await this.isPatternExist({ pattern: this.pattern });

                if (!exist) {
                    await this.appendNewPattern({ pattern: this.pattern, up: 0, down: 0 });

                    this.isExist = false;
                    this.savedPattern = this.pattern;
                    this.savedUp = 0;
                    this.saveDown = 0;
                } else {
                    this.isExist = true;
                    this.savedRowNumber = exist.rowNumber;
                    this.savedPattern = exist.pattern;
                    this.savedUp = exist.up;
                    this.saveDown = exist.down;
                }

            } else {
                this.updateToast({ type: 'failed', message: `Please provide correct pattern.` });
            }

            this.pattern = '';
            this.updateBlockUi({ blockUi: false });
        },

        addUp () {
            this.upPlus++;
        },

        addDown () {
            this.downPlus++;
        },

        resetValues () {
            this.upPlus = 0;
            this.downPlus = 0;
        },

        async saveChanges () {
            this.updateBlockUi({ blockUi: true });

            await this.updatePattern({
                rowNumber: this.savedRowNumber,
                pattern: this.savedPattern,
                up: this.savedUp + this.upPlus,
                down: this.saveDown + this.downPlus
            });

            this.isExist = false;
            this.pattern = '';
            this.savedRowNumber = 0;
            this.savedPattern = '';
            this.savedUp = 0;
            this.saveDown = 0;
            this.upPlus = 0;
            this.downPlus = 0;

            this.updateBlockUi({ blockUi: false });
        }
    }
};
</script>

<style scoped lang="scss">
.add_pattern_wrapper {
    .ap__label_input {
        padding: 10px 10px 16px;
        border-bottom: 1px solid #313452;

        > p {
            margin-bottom: 4px;
            font-size: 12px;
            font-weight: 700;
        }

        .li_input_button {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;

            > input {
                flex-basis: 56%;
            }

            > div {
                flex-basis: 40%;
            }
        }
    }

    .ap__existed_edit {
        padding: 10px;

        > p {
            font-weight: 700;
        }

        .ee__pattern_status {
            margin-top: 20px;
            display: flex;
            justify-content: space-between;

            .ps__label_value {
                &.lv__pattern {
                    flex-basis: 42%;
                }

                &.lv__up {
                    flex-basis: 27%;

                    span {
                        color: #71c016;
                    }
                }

                &.lv__down {
                    flex-basis: 27%;

                    span {
                        color: #ff4747;
                    }
                }

                > p {
                    &:first-child {
                        margin-bottom: 4px;
                        font-size: 12px;
                        font-weight: 700;
                    }
                }

                > div {
                    height: 36px;
                    padding: 0 8px;
                    display: flex;
                    align-items: center;
                    border: 2px solid #1e1e2f;
                    border-radius: 4px;
                }
            }
        }

        .ee__buttons_section {
            margin-top: 20px;

            .bs__edit_buttons {
                margin-bottom: 10px;
                display: flex;
                justify-content: space-between;

                > div {
                    flex-basis: 32%;
                }
            }
        }
    }
}
</style>
