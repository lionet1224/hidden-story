<template>
  <div class="p-3">
    <div class="d-flex justify-content-between">
      <h2>0.0.1</h2>

      <el-button class="ml-1">修改资料</el-button>
    </div>
    
    <p class="mt-1">
      <span class="text-secondary">版本创建人</span> Lionet 

      <span class="text-secondary ml-1">创建于</span> 
      <el-tooltip content="2020-12-23 12:33" placement='bottom'><span>3天前</span></el-tooltip>

      <span class="text-secondary ml-1">更新于</span>
      <el-tooltip content="2020-12-23 12:33" placement='bottom'><span>3天前</span></el-tooltip>
    </p>

    <p class="mt-1 project-describe">
      第一届比赛中的AB模块为游戏开发，A为上午部分的游戏界面开发，B为下午部分的游戏功能开发。
      第一届比赛中的AB模块为游戏开发，A为上午部分的游戏界面开发，B为下午部分的游戏功能开发。
      第一届比赛中的AB模块为游戏开发，A为上午部分的游戏界面开发，B为下午部分的游戏功能开发。
    </p>

    <el-row :gutter="20" class="gutter mt-2">
      <el-col :span="8">
        <h3>错误点</h3>

        <div class="todolist mt-1">
          <ul class="todos">
            <li>
              <input type="checkbox" id="todo_1" />
              <label for="todo_1">
                <span class="check"></span>
                <h4>Buy Flight Tickets</h4>
                <p class="mt-05">这是一个小功能，这是一个小功能，这是一个小功能，这是一个小功能，这是一个小功能，</p>
              </label>
              <svg-icon icon-class="delete" class="delete"></svg-icon>
            </li>
            <li>
              <input type="checkbox" id="todo_1" />
              <label for="todo_1">
                <span class="check"></span>
                <h4>Buy Flight Tickets</h4>
                <p class="mt-05">这是一个小功能，这是一个小功能，这是一个小功能，这是一个小功能，这是一个小功能，</p>
              </label>
              <svg-icon icon-class="delete" class="delete"></svg-icon>
            </li>
            <li>
              <input type="checkbox" id="todo_1" />
              <label for="todo_1">
                <span class="check"></span>
                <h4>Buy Flight Tickets</h4>
                <p class="mt-05">这是一个小功能，这是一个小功能，这是一个小功能，这是一个小功能，这是一个小功能，</p>
              </label>
              <svg-icon icon-class="delete" class="delete"></svg-icon>
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :span="8">
        <h3>优化点</h3>

        <div class="todolist mt-1">
          <ul class="todos">
            <li>
              <input type="checkbox" id="todo_1" />
              <label for="todo_1">
                <span class="check"></span>
                <h4>Buy Flight Tickets</h4>
                <p class="mt-05">这是一个小功能，这是一个小功能，这是一个小功能，这是一个小功能，这是一个小功能，</p>
              </label>
              <svg-icon icon-class="delete" class="delete"></svg-icon>
            </li>
            <li>
              <input type="checkbox" id="todo_1" />
              <label for="todo_1">
                <span class="check"></span>
                <h4>Buy Flight Tickets</h4>
                <p class="mt-05">这是一个小功能，这是一个小功能，这是一个小功能，这是一个小功能，这是一个小功能，</p>
              </label>
              <svg-icon icon-class="delete" class="delete"></svg-icon>
            </li>
            <li>
              <input type="checkbox" id="todo_1" />
              <label for="todo_1">
                <span class="check"></span>
                <h4>Buy Flight Tickets</h4>
                <p class="mt-05">这是一个小功能，这是一个小功能，这是一个小功能，这是一个小功能，这是一个小功能，</p>
              </label>
              <svg-icon icon-class="delete" class="delete"></svg-icon>
            </li>
            <li>
              <input type="checkbox" id="todo_1" />
              <label for="todo_1">
                <span class="check"></span>
                <h4>Buy Flight Tickets</h4>
                <p class="mt-05">这是一个小功能，这是一个小功能，这是一个小功能，这是一个小功能，这是一个小功能，</p>
              </label>
              <svg-icon icon-class="delete" class="delete"></svg-icon>
            </li>
            <li>
              <input type="checkbox" id="todo_1" />
              <label for="todo_1">
                <span class="check"></span>
                <h4>Buy Flight Tickets</h4>
                <p class="mt-05">这是一个小功能，这是一个小功能，这是一个小功能，这是一个小功能，这是一个小功能，</p>
              </label>
              <svg-icon icon-class="delete" class="delete"></svg-icon>
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :span="8">
        <h3>资源下载</h3>

        <div class="mt-1 assets-download">
          <ul>
            <li class="d-flex justify-content-between">
              <a href="#">赛题文档.docx</a>
              <span class="text-secondary">32.3M</span>  
            </li>
            <li class="d-flex justify-content-between">
              <a href="#">赛题文档.docx</a>
              <span class="text-secondary">32.3M</span>  
            </li>
            <li class="d-flex justify-content-between">
              <a href="#">赛题文档.docx</a>
              <span class="text-secondary">32.3M</span>  
            </li>
            <li class="d-flex justify-content-between">
              <a href="#">赛题文档.docx</a>
              <span class="text-secondary">32.3M</span>  
            </li>
            <li class="d-flex justify-content-between">
              <a href="#">赛题文档.docx</a>
              <span class="text-secondary">32.3M</span>  
            </li>
          </ul>  
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
// .todolist{
//   border: 1px solid #dedede;
//   padding: 15px 10px;
//   border-radius: 10px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
// }

input[type=text] {
  //flex-basis: 80%;
  //padding: 0 5px;
  font-weight: 700;
  font-size: 1.2rem;
  color: #6C717B;
}

.input-buttons {
  //border-bottom: 1px solid #8e979c;
  //flex-basis: 20%;
  //text-align: center;
  //padding: 0px 0 0 10px;
}

.input-buttons a {
  text-decoration: none;
}

.input-buttons i {
  margin-top: 5px;
  font-size: 20px;
  color: #8e979c;
}

ul.todos {
  margin-left: 0;
  padding: 0;
  list-style: none;
  overflow: auto;
}

li {
  user-select: none;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
}

li i {
  color: #6C717B;
  font-size: 15px;
  cursor: pointer;
  padding: 5px 10px;
}

input[type=checkbox] {
  display: none
}

input[type=checkbox]+label {
  color: #6C717B;
  font-size: 15px;
  cursor: pointer;
  position: relative;
  border-radius: 3px;
  display: inline-block;
  padding: 5px 5px 5px 30px;
}

input[type=checkbox]+label:hover {
  color: #353A42;
  background-color: #F4F7FA;
}

input[type=checkbox]+label span.check {
  left: 4px;
  top: 5px;
  position: absolute;
  width: 18px;
  height: 18px;
  display: block;
  background: white;
  border-radius: 3px;
  border: 1px solid #b8bfcc;
  box-shadow: 0 2px 3px #F0F4F8;
}

input[type=checkbox]:checked+label {
  color: #AEB7C6;
  text-decoration: line-through;
}

input[type=checkbox]:checked+label span.check {
  background-color: transparent;
  border-color: transparent;
  box-shadow: none;
}

input[type=checkbox]+label span.check::after {
  width: 100%;
  height: 100%;
  content: '';
  display: block;
  position: absolute;
  background-image: url('https://tjgillweb.github.io/Vacation-Todo-App/images/tick.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 16px 16px;
  transform: scale(0);
  transition: transform 300ms cubic-bezier(0.3, 0, 0, 1.5);
}

input[type=checkbox]:checked+label span.check::after {
  transform: scale(1);
}

input[type=checkbox]+label span.check::before {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  content: '';
  position: absolute;
  border-radius: 50%;
  background: #8798AA;

  opacity: .8;
  transform: scale(0);
}

input[type=checkbox]:checked+label span.check::before {
  opacity: 0;
  transform: scale(1.3);
  transition: opacity 300ms cubic-bezier(0.2, 0, 0, 1), transform 400ms cubic-bezier(0.3, 0, 0, 1.4);
}

li:hover .delete{
  opacity: 1;
}

.delete{
  font-size: 24px;
  width: 80px;
  fill: #555;
  cursor: pointer;
  opacity: 0;

  &:hover{
    fill: rgb(245, 108, 108);
  }
}
</style>