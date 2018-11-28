/**
 * 路由组件出口文件
 */
import React from 'react';
import AsynchronousTable from './tables/AsynchronousTable';
import CalendarPlan from './calendar/CalendarPlan';
import Center from './center/Center';
import RouterEnter from './auth/RouterEnter';
import Wysiwyg from './ui/Wysiwyg';  // 按需加载富文本配置
import Bundle from './widget/Bundle';

const WysiwygBundle = (props) => (
    <Bundle load={Wysiwyg}>
        {(Component) => <Component {...props} />}
    </Bundle>
);

export default {
  AsynchronousTable,RouterEnter, WysiwygBundle,CalendarPlan,Center
}