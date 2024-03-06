import React from "react";
import "../styles/Homecomp.css";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import HomeIcon from "@mui/icons-material/Home";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBaseballOutlinedIcon from "@mui/icons-material/SportsBaseballOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import ConnectedTvOutlinedIcon from "@mui/icons-material/ConnectedTvOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { useNavigate } from "react-router-dom";

function HomeComponent() {
  const navigate = useNavigate();
const alerttodemo =()=>{
navigate("/Dead");
}
  return (
      <Sidebar className="SiderClass">
        <Menu className="sidebar">
          <div className="subbarpart1">
            <MenuItem icon={<HomeIcon />}>Home</MenuItem>
            <MenuItem>Popular</MenuItem>
          </div>
          <SubMenu label="TOPICS">
            <SubMenu icon={<SportsEsportsOutlinedIcon />} label="game">
              <MenuItem onClick={()=>alerttodemo()}>Valheim</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Genshin Impact</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Minecraft</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Pokimane</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Halo Infinite</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Call Of Duty: Warzone</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Path of Exile</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Hollow Knight: SilkSong</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Escape from Tarkov</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Watch Dogs: Legion</MenuItem>
            </SubMenu>
            <SubMenu icon={<SportsBaseballOutlinedIcon />} label="Sports">
              <MenuItem onClick={()=>alerttodemo()}>NFL</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>NBA</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>Megan Anderson</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>Atlanta Hawks</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>Los Angeles Lakers</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>Boston Celties</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>Arsenal F.C.</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>Philadelphia 76ers</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>Premier League</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>UFC</MenuItem>
            </SubMenu>
            <SubMenu icon={<SignalCellularAltOutlinedIcon />} label="Business">
              <MenuItem onClick={()=>alert("Still Working On it")}>GameStop</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>Moderna</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>Pfizer</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>Johnson & johnson</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>AstraZeneca</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>Walgreens</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>Best Buy</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>Novavax</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>SpaceX</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>Tesla</MenuItem>
            </SubMenu >
            <SubMenu icon={<WbSunnyOutlinedIcon />} label="Crypto">
              <MenuItem>Cardano</MenuItem>
              <MenuItem>Dogecoin</MenuItem>
              <MenuItem>Algorand</MenuItem>
              <MenuItem>Bitcoin</MenuItem>
              <MenuItem>Litecoin</MenuItem>
              <MenuItem>Basic Attention Token</MenuItem>
              <MenuItem>BitcoinCash</MenuItem>
            </SubMenu>
            <SubMenu icon={<ConnectedTvOutlinedIcon />} label="Television">
              <MenuItem onClick={()=>alert("Still Working On it")}>The Real HouseWives of Atlanta</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>The Bachelor</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>Sister Wives</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>90 Day Finance</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>Wife Swap</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>The Amazing Race Australia</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>Married at First Sight</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>The Real Housewives of dalllas</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>My 600-lb life</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>Last Week Tonight with john oliver</MenuItem>
            </SubMenu>
            <SubMenu icon={<StarBorderOutlinedIcon />} label="Celebrity">
              <MenuItem onClick={()=>alert("Still Working On it")}>Kim kardashian</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>Doja Cat</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>Lggy Azalea </MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>Any Taylor-Joy</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>Natalie Portman</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>Henry Cavil</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>Millie Bobby Brown</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>Tom Hiddelston</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>Keanu Reeves</MenuItem>
            </SubMenu>
            <SubMenu label="Show more">
              <MenuItem onClick={()=>alert("Still Working On it")}>Animal & Pets</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>Anime</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>Art</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>Cars And Motor Vehicles</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>Crafts & DIY</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>Culture,Race,And Ethnicity</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>Ethics & Philosphy</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>Fashion</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>Food and Drink</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>History</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>Hobbies</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>Law</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>Learning and Education</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>Militry</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>Movies</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>Music</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>Place</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>poadcat and Streamer</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>Politics</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>Programming</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>Reading Writting and literature</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>Religions and Sprituality</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>Science</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>TableTops Games</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>Technology</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>Travel</MenuItem>
            </SubMenu>
          </SubMenu>
          <div className="Resources">
            <SubMenu label="Resources">
             <MenuItem onClick={()=>alert("Still Working On it")}>About reddit</MenuItem>
             <MenuItem onClick={()=>alert("Still Working On it")}>Adverties</MenuItem>
             <MenuItem onClick={()=>alert("Still Working On it")}>Help</MenuItem>
             <MenuItem onClick={()=>alert("Still Working On it")}>Blog</MenuItem>
             <MenuItem onClick={()=>alert("Still Working On it")}>Careers</MenuItem>
             <MenuItem onClick={()=>alert("Still Working On it")}>Press</MenuItem>
             <SubMenu className="" label="see more">
              <div className="Resources">
              <MenuItem onClick={()=>alert("Still Working On it")}>Community</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>Best of reddit</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>Topics</MenuItem>

              </div>
              <div className="Resources">
              <MenuItem onClick={()=>alert("Still Working On it")}>Content Policy</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>Privacy Policy</MenuItem>
              <MenuItem onClick={()=>alert("Still Working On it")}>User agreement</MenuItem>

              </div>
             </SubMenu>
            </SubMenu>
            <SubMenu label="POPULAR POST">
            <MenuItem onClick={()=>alert("Still Working On it")}>English / Gloable</MenuItem>
            <MenuItem onClick={()=>alert("Still Working On it")}>Deutsch</MenuItem>
            <MenuItem onClick={()=>alert("Still Working On it")}>Espanol</MenuItem>
            <MenuItem onClick={()=>alert("Still Working On it")}>Francais</MenuItem>
            <MenuItem onClick={()=>alert("Still Working On it")}>Italiano</MenuItem>
            <MenuItem onClick={()=>alert("Still Working On it")}>Portugues</MenuItem>

            </SubMenu>
            
          </div>

        </Menu>
        <p>all right reservs</p>
      </Sidebar>
  );
}

export default HomeComponent;
