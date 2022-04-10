import { ChatBubble, Edit, Flag } from "@mui/icons-material";
import { Button, Box, Card, Divider, Grid, LinearProgress, useTheme } from "@mui/material";
import ConversationBox from "components/chat/ConversationBox";
import Progress from "components/Dashboards/projectManagementV2/Progress";
import Projects from "components/Dashboards/projectManagementV2/Projects";
import Tasks from "components/Dashboards/projectManagementV2/Tasks";
import Teams from "components/Dashboards/projectManagementV2/Teams";
import FlexBox from "components/FlexBox";
import MoreOptions from "components/MoreOptions";
import ActivityListItem from "components/teamMember/ActivityListItem";
import TodoItem from "components/teamMember/TodoItem";
import { H5, H6, Small } from "components/Typography";
import useTitle from "hooks/useTitle";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { H3 } from "components/Typography";
import MetricHeader from "components/dao/MetricHeader";
import ServiceHeader from "components/dao/ServiceHeader";
import SlashieeHeader from "components/dao/SlashieeHeader";

const CreateService = () => {
  // change navbar title
  useTitle("Create Service");
  const theme = useTheme();
  const {
    t
  } = useTranslation();
  const [todoEl, setTodoEl] = useState(null);

  const handleTodoMoreOpen = event => {
    setTodoEl(event.currentTarget);
  };

  const handleTodoMoreClose = () => setTodoEl(null);

  return <Box pt={2} pb={4}>
     <SlashieeHeader theme={theme}/>
      <Grid container spacing={3}>
        <ServiceHeader user="" theme={theme}/>
        <MetricHeader  user="" theme={theme}/>
      </Grid>


<H3> &nbsp;</H3>

      <Grid container spacing={3}>
        
      {/*        
       TODO: Divsh follow create service to complete form.*/}
        
      
      </Grid>

       
    </Box>;
};

const recentActivity = [{
  id: 1,
  title: "Karen leave some comments on Konsep Ilustrasi",
  date: "Aug 10",
  Icon: ChatBubble
}, {
  id: 2,
  title: "Karen change project info on Project Homepage",
  date: "Aug 10",
  Icon: Edit
}, {
  id: 3,
  title: "Andrea change the due date of Project Homepage",
  date: "Aug 10",
  Icon: Flag
}];
const todoList = [{
  id: 1,
  title: "Create Minimal Logo",
  date: "Due In 2 Days",
  status: "Pending"
}, {
  id: 2,
  title: "Stock Market Exchange",
  date: "Due In 3 Days",
  status: "Processing"
}, {
  id: 3,
  title: "Shopping & Groccery",
  date: "Due In 5 days",
  status: "Pending"
}, {
  id: 4,
  title: "Football Match",
  date: "Due In 1 Day",
  status: "Completed"
}, {
  id: 5,
  title: "Stock Market Exchange",
  date: "Due In 3 Days",
  status: "Processing"
}];
const conversationList = [{
  name: "Ella knox",
  lastMsg: "Hi. Our deadlines are.....",
  image: "/static/avatar/070-man-15.svg",
  time: "11:50pm"
}, {
  name: "Sean mila",
  lastMsg: "Hi. Our deadlines are.....",
  image: "/static/avatar/069-woman-15.svg",
  time: "11:40pm"
}, {
  name: "Taylor Swift",
  lastMsg: "Hi. Our deadlines are.....",
  image: "/static/avatar/067-man-14.svg",
  time: "11:30pm"
}, {
  name: "Ella knox",
  lastMsg: "Hi. Our deadlines are.....",
  image: "/static/avatar/070-man-15.svg",
  time: "11:50pm"
}, {
  name: "Sean mila",
  lastMsg: "Hi. Our deadlines are.....",
  image: "/static/avatar/069-woman-15.svg",
  time: "11:40pm"
}];
export default CreateService;