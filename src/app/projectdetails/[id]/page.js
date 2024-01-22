'use client'
import {
    Box,
    Button,
    Card,
    Grid,
    Tab,
    Tabs,
    ThemeProvider,
    Typography,
    IconButton,
    Tooltip,
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
<<<<<<<< HEAD:src/app/projectdetails/[id]/page.js
  import themeDefault from "../../../themes/theme";
  import Link from "next/link";
  import TaskTable from "../../../components/Project/TaskTable";
  import MembersTable from "../../../components/Project/MembersTable";
  import ReportsTable from "../../../components/Project/ReportsTable";
  import { translate } from "../../../config/localisation";
  import addUserTypes from "../../../Constants/addUserTypes";
  import Spinner from "../../../components/common/Spinner";
========
  import themeDefault from "@/themes/theme";
  import Link from "next/link";
  import TaskTable from "@/components/Project/TaskTable";
  import MembersTable from "@/components/Project/MembersTable";
  import ReportsTable from "@/components/Project/ReportsTable";
  import { translate } from "@/config/localisation";
  import addUserTypes from "@/Constants/addUserTypes";
  import Spinner from "@/components/common/Spinner";
>>>>>>>> navbar:src/app/ui/pages/projects/projectDetails.js
  import Menu from "@mui/material/Menu";
  import { useDispatch, useSelector } from "react-redux";
  import { styled, alpha } from "@mui/material/styles";
  import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
<<<<<<<< HEAD:src/app/projectdetails/[id]/page.js
  import DatasetStyle from "../../../styles/dataset";
  import ProjectDescription from "../../../components/Tabs/ProjectDescription";
  import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
  import userRole from "../../../utils/UsersRolesList";
  import SuperChecker from "../../../components/Project/SuperChecker";
import { fetchProjectDetails } from "@/Lib/Features/projects/getProjectDetails";
import SuperCheckerTasks from "../../../components/Project/SuperCheckerTasks";
========
  import DatasetStyle from "@/styles/dataset";
  import ProjectDescription from "@/components/Tabs/ProjectDescription";
  import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
  import userRole from "@/utils/UsersRolesList";
  import SuperChecker from "@/components/Project/SuperChecker";
import { fetchProjectDetails } from "@/Lib/Features/projects/getProjectDetails";
import SuperCheckerTasks from "@/components/Project/SuperCheckerTasks";
>>>>>>>> navbar:src/app/ui/pages/projects/projectDetails.js
import AllTaskTable from "@/components/Project/AllTaskTable";
     /* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "next/navigation";
// import { useRouter } from "next/navigation";
import { useRouter } from "next/router";


  const menuOptions = [
    { name: "Tasks", isChecked: false, component: () => null },
    { name: "Members", isChecked: false, component: () => null },
    { name: "Reports", isChecked: true, component: () => null },
  ];
  
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === "light"
          ? "rgb(55, 65, 81)"
          : theme.palette.grey[300],
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0",
      },
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        "&:active": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  }));
  export default function Projects({ params}) {
    // console.log("props", props)
    // const { id } = useParams();
    // const params = useParams();
    // console.log(params.id,"id");
    const router = useRouter();
    const { id } = router.query;
  //  console.log(id,"id");
    // const router = useRouter();
    // const id = 1
    const classes = DatasetStyle();
    const [projectData, setProjectData] = useState([
      { name: "Project ID", value: null },
      { name: "Description", value: null },
      { name: "Project Type", value: null },
      { name: "Status", value: null },
      { name: "Unassigned Task", value: null },
      { name: "Total Labeled Task", value: null },
      { name: "Reviewed Task Count", value: null },
    ]);
    // let navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
     /* eslint-disable react-hooks/exhaustive-deps */

    const dispatch = useDispatch();
    const ProjectDetails = useSelector((state) => state.getProjectDetails && state.getProjectDetails?.data);
    const userDetails = useSelector((state) =>  state.getLoggedInData && state.getLoggedInData?.data);
    const loggedInUserData = useSelector(
      (state) => state.getLoggedInData && state.getLoggedInData?.data
    );
    const getProjectDetails = () => {
      dispatch(fetchProjectDetails(id))
    };
 /* eslint-disable react-hooks/exhaustive-deps */
 useEffect(() => {
  console.log("Fetching project details...");
  if (id) {
    dispatch(fetchProjectDetails(id));
  }
}, [id, dispatch]);
    useEffect(() => {
      if(ProjectDetails&& ProjectDetails.id){
      const projectStatus = ProjectDetails.is_archived
        ? "Archived"
        : ProjectDetails.is_published
          ? "Published"
           :"Draft";
      setProjectData([
        {
          name: "Project ID",
          value: ProjectDetails.id,
        },
        {
          name: "Description",
          value: ProjectDetails.description,
        },
        {
          name: "Project Type",
          value: ProjectDetails.project_type,
        },
        {
          name: "Status",
          value: projectStatus,
        },
        {
          name: "Unassigned Annotation Tasks",
          value: ProjectDetails.unassigned_task_count,
        },
        {
          name: "Unassigned Review Tasks",
          value: ProjectDetails.labeled_task_count,
        },
  
        {
          name: "Unassigned Super Check Tasks",
          value: ProjectDetails.reviewed_task_count,
        },
      ]);
    }
    }, [ProjectDetails.id]);
    const [loading, setLoading] = useState(false);
    const [annotationreviewertype, setAnnotationreviewertype] = useState();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const apiLoading = useSelector((state) => state.apiStatus.loading);
  
    const isAnnotators =
      (userRole.WorkspaceManager === loggedInUserData?.role ||
        userRole.OrganizationOwner === loggedInUserData?.role ||
        userRole.Admin === loggedInUserData?.role || ProjectDetails?.project_stage === 1 ||
        ProjectDetails?.annotators?.some((user) => user.id === userDetails?.id));
  
    const isReviewer =
      ((userRole.WorkspaceManager === loggedInUserData?.role ||
        userRole.OrganizationOwner === loggedInUserData?.role ||
        userRole.Admin === loggedInUserData?.role) ? (ProjectDetails?.project_stage == 2 || ProjectDetails?.project_stage == 3) :
      ProjectDetails?.annotation_reviewers?.some(
        (reviewer) => reviewer.id === userDetails?.id
      ));
    const isSuperChecker =
      ((userRole.WorkspaceManager === loggedInUserData?.role ||
        userRole.OrganizationOwner === loggedInUserData?.role ||
        userRole.Admin === loggedInUserData?.role) ? ProjectDetails?.project_stage == 3 : false ||
      ProjectDetails?.review_supercheckers?.some(
        (superchecker) => superchecker.id === userDetails?.id
      ));
  
    const allTask =
      userRole.WorkspaceManager === loggedInUserData?.role ||
      userRole.OrganizationOwner === loggedInUserData?.role ||
      userRole.Admin === loggedInUserData?.role;
  
  /* eslint-disable react-hooks/exhaustive-deps */

    useEffect(() => {
      setLoading(apiLoading);
    }, [apiLoading]);
  
    let projectdata = ProjectDetails?.annotators?.filter((x) => {
      return ProjectDetails?.annotation_reviewers?.find(
        (choice) => choice.id === x.id
      );
    });
  
   
  
    let annotationdata = ProjectDetails?.annotators?.filter(
      (x) => x.id == userDetails.id
    );
    let reviewerdata = ProjectDetails?.annotation_reviewers?.filter(
      (x) => x.id == userDetails.id
    );
    useEffect(() => {
      if (annotationdata?.length && !reviewerdata?.length) {
        setAnnotationreviewertype("Annotation Reports");
      } else if (reviewerdata?.length && !annotationdata?.length) {
        setAnnotationreviewertype("Reviewer Reports");
      }
    }, [annotationdata, reviewerdata,dispatch]);
  
    // const handleOpenSettings = () => {
    //   navigate(`/projects/${id}/projectsetting`);
    // };
  
    const handleOpenSettings = () => {
      router.push(`/workspaces/workspacesetting`);
    };

    let projectValue = "Unassigned Super Check Tasks"
    const filterdata = projectData.filter(item => item.name !== projectValue)
    const projectFilterData = isSuperChecker ? projectData : filterdata
  
  
    const TabPanData = [
      {
        tabEle: (
          <Tab
            label={translate("label.annotationTasks")}
            sx={{ fontSize: 16, fontWeight: "700" }}
          />
        ),
        tabPanelEle: (
          <TaskTable type="annotation" ProjectDetails={ProjectDetails} />
        ),
        showTab: isAnnotators,
      },
      {
        tabEle: (
          <Tab
            label={translate("label.reviewTasks")}
            sx={{ fontSize: 16, fontWeight: "700" }}
          />
        ),
        tabPanelEle: <TaskTable type="review" />,
        showTab: isReviewer,
      },
      {
        tabEle: (
          <Tab
            label="Super Check Tasks"
            sx={{ fontSize: 16, fontWeight: "700" }}
          />
        ),
        tabPanelEle: <SuperCheckerTasks type="superChecker" />,
        showTab: isSuperChecker,
      },
  
      {
        tabEle: (
          <Tab
            label={translate("label.annotators")}
            sx={{ fontSize: 16, fontWeight: "700" }}
          />
        ),
        tabPanelEle: (
          <MembersTable
            onRemoveSuccessGetUpdatedMembers={() => getProjectDetails()}
            dataSource={ProjectDetails.annotators}
            type={addUserTypes.PROJECT_ANNOTATORS}
          />
        ),
        showTab: isAnnotators,
      },
      {
        tabEle: (
          <Tab
            label={translate("label.reviewers")}
            sx={{ fontSize: 16, fontWeight: "700" }}
          />
        ),
        tabPanelEle: (
          <MembersTable
            onRemoveSuccessGetUpdatedMembers={() => getProjectDetails()}
            dataSource={ProjectDetails.annotation_reviewers}
            type={addUserTypes.PROJECT_REVIEWER}
          />
        ),
        showTab: isReviewer,
      },
      {
        tabEle: (
          <Tab
            label="Super Checkers "
            sx={{ fontSize: 16, fontWeight: "700" }}
          />
        ),
        tabPanelEle: (
          <MembersTable
            dataSource={ProjectDetails.review_supercheckers}
            type={addUserTypes.PROJECT_SUPERCHECKER}
            onRemoveSuccessGetUpdatedMembers={() => getProjectDetails()}
          />
        ),
        showTab: isSuperChecker,
  
      },
  
      {
        tabEle: (
          <Tab
            label={translate("label.reports")}
            sx={{
              fontSize: 16,
              fontWeight: "700",
              flexDirection: "row-reverse",
            }}
            onClick={handleClick}
          />
        ),
        tabPanelEle: (
          <ReportsTable
            annotationreviewertype={annotationreviewertype}
            userDetails={userDetails}
            isAnnotators={isAnnotators}
            isReviewer={isReviewer}
            isSuperChecker={isSuperChecker}
          />
        ),
        showTab: (isAnnotators || isReviewer || isSuperChecker)
      },
  
      {
        tabEle: (
          <Tab label="All Tasks" sx={{ fontSize: 16, fontWeight: "700" }} />
        ),
        tabPanelEle: <AllTaskTable />,
        showTab: allTask,
      },
    ];
  
    const filteredTabPanData = TabPanData.filter((el, i) => el.showTab);
  
    const renderTabs = () => {
      return (
        <>
          <Grid>
            <Box>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                {filteredTabPanData.map((el, i) => {
                  return el.tabEle;
                })}
              </Tabs>
            </Box>
          </Grid>
          {filteredTabPanData.map((el, i, array) => {
            return (
              <>
  
                <TabPanel value={value} index={i}>
                  {el.tabPanelEle}
  
                </TabPanel>
              </>
            )
          })}
  
        </>
      );
    };
  
    return (
      <ThemeProvider theme={themeDefault}>
        {/* <Header /> */}
        {loading && <Spinner />}
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Card
            sx={{
              width: "100%",
              minHeight: 500,
              padding: 5,
            }}
          >
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{ mb: 3 }}
            >
              <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
                <Typography variant="h3">{ProjectDetails.title}</Typography>
              </Grid>
  
              {(userRole.WorkspaceManager === loggedInUserData?.role ||
                userRole.OrganizationOwner === loggedInUserData?.role ||
                userRole.Admin === loggedInUserData?.role) && (
                  <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
                    <Tooltip title={translate("label.showProjectSettings")}>
                      <IconButton
                      onClick={handleOpenSettings}
                        sx={{ marginLeft: "140px" }}
                      >
                        <SettingsOutlinedIcon
                          color="primary.dark"
                          fontSize="large"
                        />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                )}
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ mb: 2 }}>
              <Grid container spacing={2}>
                {projectFilterData?.map((des, i) => (
                  <Grid key={i} item xs={isSuperChecker?3:4} sm={isSuperChecker?3:4} md={isSuperChecker?3:4} lg={isSuperChecker?3:4} xl={isSuperChecker?3:4}>
                    <ProjectDescription
                      name={des.name}
                      value={des.value}
                      index={i}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            {renderTabs()}
          </Card>
        </Grid>
      </ThemeProvider>
    );
  };
  
