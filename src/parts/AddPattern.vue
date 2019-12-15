<template>
    <div class="add_pattern_wrapper">
        <div class="ap__pattern_add">
            <div class="pa__input">
                <p>Pattern</p>

                <input maxlength="10" v-model="pattern" />
            </div>

            <div class="pa__button" @click="addPattern">
                <p>Add</p>
            </div>
        </div>

        <div  v-if="isExist" class="ap__saved_result">
            <p>Already Exist</p>

            <div class="sr__info_section">
                <div class="is__label_value">
                    <p>Pattern</p>

                    <p>{{ savedPattern }}</p>
                </div>

                <div class="is__label_value">
                    <p>Up</p>

                    <p>{{ savedUp }} (<span>+{{ upPlus }}</span>)</p>
                </div>


                <div class="is__label_value">
                    <p>Down</p>

                    <p>{{ saveDown }} (<span>+{{ downPlus }}</span>)</p>
                </div>
            </div>

            <div class="sr__buttons_section">
                <div class="bs__button" @click="addUp">
                    <p>+1 UP</p>
                </div>

                <div class="bs__button" @click="addDown">
                    <p>+1 DOWN</p>
                </div>

                <div class="bs__button" @click="saveChanges">
                    <p>Save</p>
                </div>

                <div class="bs__button" @click="resetValues">
                    <p>Reset</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';

export default {
    name: 'AddPattern',

    data () {
        return {
            isExist: false,
            pattern: '',
            savedRowNumber: 0,
            savedPattern: '',
            savedUp: 0,
            saveDown: 0,
            upPlus: 0,
            downPlus: 0
        };
    },

    methods: {
        ...mapMutations(['updateToast', 'updateBlockUi']),

        ...mapActions(['appendNewPattern', 'isPatternExist', 'updatePattern']),

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
    padding: 30px;
    background-color: #131633;
    border-radius: 6px;

    .ap__pattern_add {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;

        .pa__input {
            flex-basis: 60%;

            > p {
                margin-bottom: 10px;
                font-size: 14px;
            }
        }

        .pa__button {
            padding: 10px;
            flex-basis: 30%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #f8f9fa;
            border-radius: 4px;
            cursor: pointer;

            &:hover {
                background-color: darken(#f8f9fa, 20%);
            }

            > p {
                color: #212529;
            }
        }
    }

    .ap__saved_result {
        margin-top: 40px;

        .sr__info_section {
            margin: 20px 0;
            display: flex;
            justify-content: space-between;

            .is__label_value {
                > p {
                    &:first-child {
                        margin-bottom: 10px;
                        font-size: 14px;
                    }

                    &:last-child > span {
                        color: #70d96e;
                    }
                }
            }
        }

        .sr__buttons_section {
            display: flex;
            justify-content: space-between;

            .bs__button {
                padding: 10px;
                flex-basis: 20%;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #f8f9fa;
                border-radius: 4px;
                cursor: pointer;

                &:hover {
                    background-color: darken(#f8f9fa, 20%);
                }

                > p {
                    color: #212529;
                }
            }
        }
    }
}
</style>
