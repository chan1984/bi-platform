define(["template"],function(a){function b(b){"use strict";b=b||{};var c=a.utils,d=(c.$helpers,c.$each),e=b.taskMgrList,f=(b.$item,b.index,c.$escape),g="";return g+='<div class="fix-report-mgr c-f j-fix-report-mgr">\n    <div class="fix-report-tab">\n        <span class="fix-report-tab-focus">任务管理</span>\n        <span>任务监控</span>\n    </div>\n    <div class="fix-report-content c-f j-fix-report-content">\n        <div class="fix-report-task-mgr-list">\n            <table cellspacing="0">\n                <thead>\n                    <tr>\n                        <th class="list-index">任务名称</th>\n                        <th class="list-name">运行状态</th>\n                        <th class="list-btns">操作</th>\n                        <th class="list-url">url地址</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    ',d(e,function(a){g+='\n                    <tr class="task-item" task-id="',g+=f(a.taskId),g+='">\n                        <td><div class="list-index ellipsis" title="',g+=f(a.taskName),g+='">',g+=f(a.taskName),g+='</div></td>\n                        <td><div class="list-name ellipsis" title="',g+=f(a.statusInfo),g+='">',g+=f(a.statusInfo),g+='</div></td>\n                        <td>\n                            <div class="list-btns">\n                                <span class="radius task-start c-p j-task-start" title="启动">\n                                    <span></span>\n                                </span>\n                                <span class="normal task-look c-p j-task-look" title="查看"><span></span></span>\n                                <span class="radius radius-red task-del c-p j-task-del" title="删除"><span></span></span>\n                            </div>\n                        </td>\n                        <td><div class="list-url text c-p ellipsis j-task-url" title="',g+=f(a.taskUrl),g+='">',g+=f(a.taskUrl),g+="</div></td>\n                    </tr>\n                    "}),g+="\n                </tbody>\n            </table>\n            ",0===e.length&&(g+='\n            <div class="empty-data ta-c">暂无数据</div>\n            '),g+='\n        </div>\n        <div class="box-add c-f">\n            <span class="radius c-p task-add f-r j-task-add" title="新增任务">\n                <span></span>\n            </span>\n        </div>\n    </div>\n    <div class="f-r operation-btns j-operation-btns hide">\n        <span type="button" class="form-common-input-button mr-10 j-ok">完成</span>\n        <span type="button" class="form-common-input-button j-cancel">取消</span>\n    </div>\n</div>'}return{render:b}});