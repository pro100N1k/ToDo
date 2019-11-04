import { detectBrowser } from './_helpers';

var moment = require('moment');

class Application {
    constructor() {
        Application.init();
    }

    static initializePlugins() {
        // INIT YOUR PLUGINS

        $(document).ready(function() {

            let todoItems = [];

            function addTodoItem(text) {
                const todoObject = {
                    text,
                    checked: false,
                    id: Date.now(),
                };

                todoItems.push(todoObject);
                console.log(todoItems);

                $('.board-content').append(
                    ` <div class="board-item-wrapper">
                         <div class="board-item">
                            <div class="board-item__date">20.09.2019</div>
                             <div class="board-item__title">
                                ${todoObject.text}
                             </div>
                             <div class="board-item-action">
                                 <ul>
                                     <li class="action action--open">
                                         <i class="zmdi zmdi-eye"></i>
                                     </li>
                                     <li class="action action--edit">
                                         <i class="zmdi zmdi-edit"></i>
                                     </li>
                                     <li class="action action--delete">
                                         <i class="zmdi zmdi-close"></i>
                                     </li>
                                 </ul>
                             </div>
                             <div class="board-item__text">
                                 <textarea name="1" cols="30" rows="10"></textarea> Тут буде відповідний текст (опис) задачі, який буде прихований і щоб його побачити потрібно
                                 атиснути на кнопку "Читати"
                             </div>
                         </div>
                     </div>`
                );
            }

            function show (array) {
                $('.board-body').html(array);
            }

            function removeTodoItem (item) {
                item.remove();
            }

            // $('.js-add-item').on('click', function() {
            //     show(todoItems);
            // });

            $('.describe-block-btn').on('click' , function(e) {
                e.preventDefault();
                const input = $('.describe-block input');
                const text = $('.describe-block input').val().trim();

                if (text !== '') {
                    addTodoItem(text);
                    input.val('');
                }
            });


            $('.describe-block textarea').on('keyup', function() {
                const _this = $(this);
                const text = _this.val();
            });


            $('.describe-block-btn').on('click' , function() {
                // const _this = $(this);
                // const wrapper = _this.closest('.describe-block');
                // const text = wrapper.find('.input-wrapper input');
                // const textVal = text.val();

                // message.text(text);

                // if(textVal.length >= 1) {
                //
                //     text.removeClass('error');
                //     $('.board-content').append(`
                //   <div class="board-item-wrapper">
                //         <div class="board-item">
                //             <div class="board-item__date">20.09.2019</div>
                //             <div class="board-item__title">
                //                 Тут буде введений заголовк, який має дубвюатися, чи просто виводитися у два рядки
                //             </div>
                //             <div class="board-item-action">
                //                 <ul>
                //                     <li class="action action--open">
                //                         <i class="zmdi zmdi-eye"></i>
                //                     </li>
                //                     <li class="action action--edit">
                //                         <i class="zmdi zmdi-edit"></i>
                //                     </li>
                //                     <li class="action action--delete">
                //                         <i class="zmdi zmdi-close"></i>
                //                     </li>
                //                 </ul>
                //             </div>
                //             <div class="board-item__text">
                //                 <textarea name="1" cols="30" rows="10"></textarea> Тут буде відповідний текст (опис) задачі, який буде прихований і щоб його побачити потрібно
                //                 атиснути на кнопку "Читати"
                //             </div>
                //         </div>
                //     </div>
                // `);
                //
                //
                // } else {
                //     text.addClass('error');
                //     alert('Питаю щось!?');
                // }


            });

            $('.board-item-action .action--open').on('click', function() {
                const _this = $(this);
                const wrapper = _this.closest('.board-item-wrapper');
                const text = wrapper.find('.board-item__text');

            });

            $('.board-item-action .action--edit').on('click', function() {
                const _this = $(this);
                const wrapper = _this.closest('.board-item-wrapper');

                console.log('edit');
            });

            $('.board-item-action .action--delete').on('click', function() {
                const _this = $(this);
                const wrapper = _this.closest($(document).find('.board-item-wrapper'));
                // actionElem(_this);
                removeTodoItem(wrapper);
                console.log(1);
                showMessage();
            });

            function showMessage () {
                const message = confirm('Are you sure about that&');
                if(message === true) {
                    alert('OK')
                } else {
                    alert('To nne morochu sraku!');
                }

            }


            function actionElem (el) {

                if (el.hasClass('action--delete')) {
                    el.closest('.board-item-wrapper').remove();

                } else {
                    if(el.hasClass('action--edit')) {
                        console.log('edit2');

                    }
                }
            }
        });

    };

    static initializeModules() {
        // INIT YOUR MODULES

    };

    static detectBrowser() {
        document.body.setAttribute('data-browser', detectBrowser());
    }

    static init() {
        this.detectBrowser();
        this.initializePlugins();
        this.initializeModules();
    }
};

const App = new Application();