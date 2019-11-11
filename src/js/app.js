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
                    date: Date.now(),
                };

                todoItems.push(
                    ` <div class="content-item-wrapper">
                         <div class="content-item">
                         
                         <div class="input-checkbox-wrapper">
                            <input type="checkbox">
                            <span class="checkmark"></span>
                         </div>
                         
                         <div class="content-item-info">
                          <div class="content-item__date">
                               ${todoObject.date}
                             </div>
                             <div class="content-item__action">
                                 <ul>
                                     <li class="action action--open">
                                         <i class="zmdi zmdi-eye"></i>
                                     </li>
                                     <li class="action action--edit">
                                         <i class="zmdi zmdi-edit"></i>
                                     </li>
                                     <li class="action js-action-delete">
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
                            
                             
                         </div>
                     </div>`
                );

                function setIdTaks(){
                    let i=0;
                    $('.board-body').find('.content-item-wrapper').each(function(){
                        let id = i;
                        $(this).attr('id',id);
                        ++i;
                    });
                };

            }

            function showTasks () {

                localStorage.setItem("tasks", JSON.stringify(todoItems));
                let storedNames = JSON.parse(localStorage.getItem("tasks"));
                $('.board-body').html(storedNames);

                console.log(todoItems);
            }

            function deleteTask (mas) {

                mas.splice(2,1);
                // for (let i = 0; i < mas.length; i++) {
                //     _this.closest('.content-item-wrapper').remove();
                // }

                return mas;
            }

            function clearTasks () {
                todoItems = [];
                showTasks();
                $('.board-body').append(
                    `<div class="body-info">
                        <div class="body__text">Enter tour first task</div>
                    </div>`
                );
            }

            // function deleteTask() {
            //     const buttonDelete = document.find('.js-action-delete');
            //     const wrapper = buttonDelete.closest('.content-item-wrapper');
            //
            //     wrapper.remove();
            // }

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

            $(document).on('click', '.js-action-delete', function() {
                const _this = $(this);
                const wrapper = _this.closest('.content-item-wrapper');

                wrapper.remove();

                deleteTask(todoItems);
                showTasks();
            });

            $(document).on('click', '.input-checkbox-wrapper', function() {
                const _this = $(this);
                const wrapper = _this.closest('.content-item');

                if (!wrapper.hasClass('checked')) {
                    wrapper.addClass('checked');
                } else {
                    wrapper.removeClass('checked');
                }
                console.log(1);
            });

            $(document).on('click','.js-action-delete', function() {

                // const _this = $(this);
                // const wrapper = _this.closest('.content-item-wrapper');
                //
                // wrapper.remove();

            });

            $('.board-footer').on('click', function() {
                clearTasks();
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