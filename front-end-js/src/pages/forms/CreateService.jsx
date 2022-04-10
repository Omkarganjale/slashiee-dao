import { ChatBubble, Edit, Flag } from "@mui/icons-material";
import {
  Button,
  Box,
  Card,
  Divider,
  TextField,
  OutlinedInput,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Grid,
  LinearProgress,
  TextareaAutosize,
  useTheme,
} from "@mui/material";
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
  const { t } = useTranslation();
  const [todoEl, setTodoEl] = useState(null);

  const handleTodoMoreOpen = (event) => {
    setTodoEl(event.currentTarget);
  };

  const handleTodoMoreClose = () => setTodoEl(null);

  return (
    <>
      <Box pt={2} pb={4}>
        <SlashieeHeader theme={theme} />
        <Grid container spacing={3}>
          <ServiceHeader user="" theme={theme} />
          <MetricHeader user="" theme={theme} />
        </Grid>

        <H3> &nbsp;</H3>

        {/* <Grid container spacing={3}></Grid> */}
      </Box>

      <Box
        sx={{
          backgroundColor: "#F5F5F7",
          border: "1px solid #E3E6EB",
          shadow: "0px 7px 20px rgba(40, 41, 61, 0.08)",
        }}
      >
        <Box component="div" sx={{ "margin-top": "20px" }}>
          <H3
            sx={{
              display: "inline",
              "font-family": "Montserrat",
              "font-style": "normal",
              "font-weight": "600",
              "font-size": "14px",
              "line-height": "17px",
              color: "#3A3C40",
              width: "100%",
              "margin-left": "62px !important",
            }}
          >
            Edit your service information:
          </H3>
        </Box>
        <Box>
          <OutlinedInput
            placeholder="Service title"
            size="small"
            sx={{
              width: "660px",
              "margin-left": "60px !important",
              "font-family": "Montserrat",
              "font-style": "normal",
              "font-weight": "500",
              "font-size": "13px",
              "line-height": "16px",
              color: "#82868C",
            }}
          />
        </Box>
        <Box
          sx={{
            "margin-left": "60px !important",
          }}
        >
          <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder="Service description"
            style={{
              width: 660,
              height: 143,
              "margin-top": "13px",
              border: "1px solid #E3E6EB",
              "font-family": "Montserrat",
              "font-style": "normal",
              "font-weight": "500",
              "font-size": "13px",
              "line-height": "16px",
              color: "#82868C",
            }}
            size="small"
          />
        </Box>
        <Box>
          <OutlinedInput
            placeholder="Service charge ($)"
            size="small"
            sx={{
              width: "210px",
              "margin-top": "10px",
              "margin-left": "60px !important",
              "font-family": "Montserrat",
              "font-style": "normal",
              "font-weight": "500",
              "font-size": "13px",
              "line-height": "16px",
              color: "#82868C",
            }}
          />
        </Box>
        <Box>
          <OutlinedInput
            placeholder="Delivery duration (days)"
            size="small"
            sx={{
              width: "210px",
              "margin-top": "13px",
              "margin-left": "60px !important",
              "font-family": "Montserrat",
              "font-style": "normal",
              "font-weight": "500",
              "font-size": "13px",
              "line-height": "16px",
              color: "#82868C",
            }}
          />
        </Box>
        <Box sx={{ "margin-top": "22px", "margin-bottom": "10px" }}>
          <H3
            sx={{
              display: "inline",
              "font-family": "Montserrat",
              "font-style": "normal",
              "font-weight": "600",
              "font-size": "14px",
              "line-height": "17px",
              color: "#3A3C40",
              width: "100%",
              "margin-left": "62px !important",
            }}
          >
            Selection the team who will provide the service:
          </H3>
        </Box>
        <Box
          sx={{
            "margin-top": "13px",
            "margin-left": "60px !important",
          }}
        >
          <FlexBox alignItems="center">
            <FormControl sx={{ width: 324 }} size="small">
              <InputLabel
                id="demo-select-small"
                sx={{
                  "font-family": "Montserrat",
                  "font-weight": "500",
                  "font-size": "13px",
                  "line-height": "16px",
                  color: "#82868C",
                }}
              >
                Your team
              </InputLabel>
              <Select labelId="demo-select-small" id="demo-select-small">
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <Button
              size="small"
              variant="contained"
              sx={{ "margin-left": "23px" }}
            >
              Create a team
            </Button>
          </FlexBox>
        </Box>
        <Box sx={{ "margin-top": "45px", "margin-bottom": "266px" }}>
          <FlexBox alignItems="center" justifyContent="center">
            <Button
              size="small"
              variant="outlined"
              sx={{ "margin-left": "23px  ", color: "black", width: "124px" }}
            >
              Cancel
            </Button>
            <Button
              size="small"
              variant="contained"
              sx={{ "margin-left": "23px  ", color: "white", width: "124px" }}
            >
              Save
            </Button>
          </FlexBox>
        </Box>
      </Box>
    </>
  );
};

const recentActivity = [
  {
    id: 1,
    title: "Karen leave some comments on Konsep Ilustrasi",
    date: "Aug 10",
    Icon: ChatBubble,
  },
  {
    id: 2,
    title: "Karen change project info on Project Homepage",
    date: "Aug 10",
    Icon: Edit,
  },
  {
    id: 3,
    title: "Andrea change the due date of Project Homepage",
    date: "Aug 10",
    Icon: Flag,
  },
];
const todoList = [
  {
    id: 1,
    title: "Create Minimal Logo",
    date: "Due In 2 Days",
    status: "Pending",
  },
  {
    id: 2,
    title: "Stock Market Exchange",
    date: "Due In 3 Days",
    status: "Processing",
  },
  {
    id: 3,
    title: "Shopping & Groccery",
    date: "Due In 5 days",
    status: "Pending",
  },
  {
    id: 4,
    title: "Football Match",
    date: "Due In 1 Day",
    status: "Completed",
  },
  {
    id: 5,
    title: "Stock Market Exchange",
    date: "Due In 3 Days",
    status: "Processing",
  },
];
const conversationList = [
  {
    name: "Ella knox",
    lastMsg: "Hi. Our deadlines are.....",
    image: "/static/avatar/070-man-15.svg",
    time: "11:50pm",
  },
  {
    name: "Sean mila",
    lastMsg: "Hi. Our deadlines are.....",
    image: "/static/avatar/069-woman-15.svg",
    time: "11:40pm",
  },
  {
    name: "Taylor Swift",
    lastMsg: "Hi. Our deadlines are.....",
    image: "/static/avatar/067-man-14.svg",
    time: "11:30pm",
  },
  {
    name: "Ella knox",
    lastMsg: "Hi. Our deadlines are.....",
    image: "/static/avatar/070-man-15.svg",
    time: "11:50pm",
  },
  {
    name: "Sean mila",
    lastMsg: "Hi. Our deadlines are.....",
    image: "/static/avatar/069-woman-15.svg",
    time: "11:40pm",
  },
];
export default CreateService;
