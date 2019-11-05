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


                todoItems.push(
                    ` <div class="content-item-wrapper">
                         <div class="content-item">
                            <div class="content-item__date">20.09.2019</div>
                             <div class="content-item__action">
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
                             <div class="content-item__title">
                                ${todoObject.text}
                             </div>
                             <div class="content-item__text">
                                 <textarea name="1" cols="30" rows="10"></textarea> Тут буде відповідний текст (опис) задачі, який буде прихований і щоб його побачити потрібно
                                 атиснути на кнопку "Читати"
                             </div>
                         </div>
                     </div>`
                );

                console.log(todoItems);

            }

            function showTasks () {
                $('.board-body').html(todoItems);
            }

            $('.js-add-item').on('click', function(e) {
                e.preventDefault();
                const input = $('.input-wrapper__input');
                const text = $('.input-wrapper__input').val().trim();

                if (text.length > 0) {
                    addTodoItem(text);
                    input.val('');
                    showTasks();
                }


            });

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