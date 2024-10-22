import { Card, Typography } from '@material-tailwind/react';

const TABLE_HEAD = ['Name', 'Email', 'Role', ''];

const TABLE_ROWS = [
  {
    name: 'John Michael',
    email: 'Manager@gmail.com',
    date: '23/04/18',
  },
  {
    name: 'Alexa Liras',
    email: 'Developer@gmail.com',
    date: '23/04/18',
  },
  {
    name: 'Laurent Perrier',
    email: 'Executive@gmail.com',
    date: '19/09/17',
  },
  {
    name: 'Michael Levi',
    email: 'Developer@gmail.com',
    date: '24/12/08',
  },
  {
    name: 'Richard Gran',
    email: 'Manager@gmail.com',
    date: '04/10/21',
  },
  {
    name: 'Richard Gran',
    email: 'Manager@gmail.com',
    date: '04/10/21',
  },
  {
    name: 'Richard Gran',
    email: 'Manager@gmail.com',
    date: '04/10/21',
  },
  {
    name: 'Richard Gran',
    email: 'Manager@gmail.com',
    date: '04/10/21',
  },
];

export default function Table() {
  return (
    <Card className="h-full border w-full overflow-scroll sm:overflow-hidden">
      <table className="w-full sm:overflow-hidden min-w-max table-auto text-left">
        <thead className="bg-indigo-600">
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b text-white p-4">
                <Typography
                  variant="large"
                  color="#111"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ name, email, date }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';

            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {email}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {date}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    Edit
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}
