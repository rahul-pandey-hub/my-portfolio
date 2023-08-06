import React from 'react';
import { Card, CardContent, Typography, Table, TableBody, TableCell, TableRow, Link, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Instagram } from '@mui/icons-material';

const GradientCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: 30,
  padding: 10,
  boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
  width: '90%',
  height: 480,
  backgroundImage: 'linear-gradient(to right, #f64f59, #c471ed, #12c2e9)',
  marginLeft: '1.5%',
}));

const LeftContainer = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(to right, #434343, #000000)',
  flex: 1,
  maxWidth: '30%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: 430,
  padding: 10,
  margin: 30,
  borderRadius: 20,
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
}));

const RightContainer = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(to left, #434343, #000000)',
  flex: 1,
  maxWidth: '70%',
  height: 430,
  padding: 10,
  margin: 20,
  borderRadius: 30,
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
}));

const Image = styled('img')(({ theme }) => ({
  width: 200,
  height: 200,
  maxWidth: 200,
  borderRadius: '50%',
  margin: 10,
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
}));

const GradientText = styled(Typography)(({ theme }) => ({
  fontSize: 24,
  marginBottom: 5,
  background: 'linear-gradient(to right, #ee00ff 0%, #fbff00 100%)',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
}));

const Abcd = () => {
  return (
    <GradientCard sx={{flexDirection: {lg:'row',sm:'column',xs:'column'}, height: {lg:'30%',xs:'97%'}, width: {lg:'95%',xs:'90%'}}}>
      <LeftContainer sx={{maxWidth: {lg:'30%',xs:'97%'}}}>
        <Image
          src="rahul.jpg"
          alt="Profile Image"
        />
        <GradientText variant="h2">Rahul Pandey</GradientText>
        <Typography variant="subtitle1">Web Developer</Typography>
      </LeftContainer>
      <RightContainer sx={{maxWidth: {lg:'90%',xs:'90%'}}}>
        <GradientText variant="h3" sx={{display:'flex',justifyContent:'center'}}>Profile Details</GradientText>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Name :</TableCell>
              <TableCell>Rahul Pandey</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Age :</TableCell>
              <TableCell>21</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mobile :</TableCell>
              <TableCell>+91 9081362055</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Email :</TableCell>
              <TableCell>rahulpandey.1173@gmail.com</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Address :</TableCell>
              <TableCell>--------</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <a  target="_blank" href="https://www.instagram.com/rahul.pandey_95/">
        <Button
              className="h-max w-max flex gap-2 justify-center items-center rounded-md outline-0 active:scale-95 active:shadow-inner disabled:opacity-50 disabled:pointer-events-none disbaled:cursor-not-allowed bg-cardPrimary text-primary font-semibold text-xs py-2 px-4"
              variant="contained"
              sx={{marginTop:'3%',marginLeft:{xs:'2%'},fontSize:{xs:'0.75rem'}}}
            >
              <Instagram />
              Follow me on Instagram
            </Button>
            </a>
      </RightContainer>
    </GradientCard>
  );
};

export default Abcd;
