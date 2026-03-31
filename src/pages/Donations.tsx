import { Link } from 'react-router-dom'
import { useState } from 'react'
import { supabase } from '../lib/supabase'

const impactStories = [
  {
    name: 'John Okinyi', county: 'Siaya County, Nyanza', img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhUQDxAVEBAQFRUQFQ8QEBUVEBUWFRYWFhUVFhUYHiggGBolGxUVITEiJSkuLi4uGB8zODMtNygtLisBCgoKDg0OGBAQFy0eHR8rKystKzcrLSstLSstLS0rKystKy0vLS0tKy0tLS0tLS0tLS0tLSstKystLSsrKy0tLf/AABEIAQMAwwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAECBAUGB//EAEEQAAEDAgQEBAMFBgUCBwAAAAEAAhEDIQQSMUEFIlFhBnGBkRMyoVKxwdHwByMzQmLhFENykvEkohUWRHOCssL/xAAbAQEAAwEBAQEAAAAAAAAAAAAAAQIEAwUGB//EACsRAQACAgEEAQMCBwEAAAAAAAABAgMRBAUSITFBBiIyFFEzNEJScYGxE//aAAwDAQACEQMRAD8Az8P4UDYWrhuDZV0LWKeRX7YV7pZVHBwrbKUK2GJZU0bBDFLKiZUsqBqeGLtEX/w9yv4FvKir5zqXW7cXL2RXb0MPFrakTLJOBf0UH4N/RbUqNRxhZKfU8fNF/wBFWflz5bFimIVXjONy1AFGjjJX03H5EZscXj5YcuKaWmFuFBwTtfKcrQ5aCIUXBFIUHBBWcE4apuCcBAFzUMhWHBQcEFVzVAtR3BRIQVHtQHNVx7UBzUFYtSRS1JB2rWqUJwFKFZCMJQpwlCAZCUIhCaFUX8IORTT0ByJl+edfnfJe3g/CCUKuimoVjZeJHt2j24bxCf3oQcOUXj16qFTcGgucQGtEkmwAGpJX6T0+NYKf4edyfzlp4cq0FQwWKpuc6m1wL2BriOz5ymd5grSAXpQxyhCi4I0KLgrqq5CkGpyFKEQCQhuCO4KDggrOCi5qM4KDggrvCA4K08IDggAQkpkJIOzAUoTtCeFKDQlClCUIIQlCmQolQk7sZlGkrHxfiIU5lpt2K03hVsRg2PFwvN5PSuNyJ7rx5acfLyUjUMN3j6gDDpHoif8Anai8cpuh4nw3ScZIC4nxPj6FCaWGn4gcWuqZOUERIE6iJusM/TvFid+XeOff9oWuMeKW/Gu02OVzSIcQdHNM/guZdx6sGlpc5zHNyyXGCCXETf5odEBZuZznHLJcfMmBaL+a28J4TxFRoJAY3UZjfbZezjx1x1isfDNM2vO2LR4k8ODqbnMdy5r65G5WjyAXoXAPFga2mysSQAQ6q915Nx3PRZeF8Efadft9VaxvggZZYTYafX8FW0zPqXSuOY9w73C4qnVAdTcHBwkQQbabIjgvNOA1KnDqvxHZqlFwyvaAM8DQjrF7CNV6Vh67ajG1GfK8BwnWDddq23DPes1lGFKE4F1JwVlQHBDcEYqBClCu4KDgjEKDgoFd4QSFZeEEhSAEJ1IhJB2QTwnATwiDQlClCaEESmIU0xRILgmhTcmhQOA/abxN1NraAyFrwHuHxS2qQHaZQDy9+y8wc8nKGxLoBgXMCBJXY/tLx1b47mOfNNsNawMc0NkXu4c7u4teFjeHOGlz2uI5ZsSNQNz0FlW0ulY34dN4L4OxjDUeznO5F/1ouoqlVcM9rGwDpr59kWtiGMYatUhrBvv0XObeGulYhdwVytem0CxBvouGd4y+HelhXOb9qLImC8fmocr6WSTYC64Wvp2iImdbbnHeCNcw8sawYuszwbjjDsLUMPpXYOrNwPI/eg8a8bOYIay/cLnBxLGZ2Yr/AA+UNMhzoaCN7CTcEj1UY8n3b+Fc2OJrr5emgKTkLB121WNqN+Wo0PHWHCUchbnmhBhNgiHAv6IuCHOFuOsvL6l1H9HETMbacGCMkblzD8HU+yhOwz/sldSSmIHReTH1Pj+au/6Kv7uQqUXfZKrOC7OrTBGgXF8dqinUgbr0uD1nFyr9kRqXLLxJpXuidoEJKsMSEl6+4ZdO8CcJgpBWUJJJJBEpipJioSGUk5SQcJ+1fAZ6FKqASadTKY0yv6+ob7rmsCWsHK3IJMDXW5E76r1jiWCZXpPpVPle0tJ6dD6aryvDYRzZBBhpjOLsdtmDhaLfVc8jtidDhMOXNB63lYPH6lUvsHfDbYNAMHzhdZTc0NYAZR8LUYCWkAg7FZsnhuxR3OO4Px+qXCgKPw2EGa9Wq5jGwCfkpCYJEak31T0cASW1n5XPc+Gta5r2OE/NnGoF9RK7FvhnBOcHDDsLjeSJb7aKp4pq4bDOpis7KyCeUXdEDK3YASuVp3HiHWtdT5ln+JeDCs8VWOaCW5QGjlDgIBJ6SuRxjsa0fBqPkNIysOFDQDuQ8NJdbfMuqw37R23ptwuWkRlYHsMuGxCbgvHn1m1s1M0xTdlhwgGZMAeUKsWmm40tatLzGpdF4YM4Wl1a3KY6tJH4LVIWH4SrZqbxs2oY9WtK3SvRxzukS8nLXtvMC4Ec4Wy8LI4cOcLYevlvqaftiG3ifiEUk5TL41sQfovPvFh/ejyXoNTReeeK/wCN6L3vp7+Z/wBSpn/hSyw5JRCS+5eY9SapqLVJaGckkklAZMU6YoIFOmKdBkeMKZdgcS1syaTtNY3+kryqsaWGdQZRDhUc2kKp0pgOylxN7mD09V7aWgggiQRBB0IOoXC8V4E/DVfiU6XxKIYWNcG5n02/YcIMgbOiw1Kz56zOphs416xus+FCvimXNN1hI1+qzn8TdOu6rHE0i4so3GrsrT8NpP8ALKo16hmFx1uPLv3at4drwLipm57lW+NcawbhFfI4t0a5uZ0no3quDweOczRX8JhqDnCu6iyvVtLapdkMdpg+oVNR8uvfMx4adLj9EEtpUi4aEMMkdjl08lRxvFmssaZpZnRlc1zTe082q6Oh41r0hlGEpsbEQ2w9gIVPjPiWriaeWrTa0WN2dNxO/dRM1TqY9S0fA7P3L3faqmPINaPzXRFY3g+llwtP+rM/3cY+gC2XLfjjVYeVkndpH4b861nuCwGvLTIQMdxWq0WZK8PrXT8vKiP/ADauNlpWNWnToyU0rzzG+Mq1P/KJVZn7QnfzUivmJ6FzI/obYzYv7npNTRedeKP4/oi0vHrX2yOHosvF4s1n54XrdF6dnwZptkrqNOfIy0mmonaACSkGlJfUvP27mjxIEkToVep4oFcXh6hzHzP3rZw1UqMWWZiNmTHET4dC2qpZln0Hq40rvEuMwJKRTSkVO0Ip1FSUJSCSQSQcJ4k4c2i97g3lqDTbquBxNUSQV7D4ow+elO4Xk/GuE5pc0wVxvXy00n7VNjx1V7C12tuSuYrsrMKAcS/uuc49ulcunouC8R0aYggW9VT4pxsYggMbqYAGpJsAuHpveToV6j+zvw/SyDF1JfVDnNaHfIyI5gN3X1Om0KsYI2tbkzp2mBoClTZTH+WxrP8AaAEZySZy2MAbkCojOQnoMvGYJjtQsqrwhnRdE9qA6mgw6fCWjZWW4IDZaRYolqhO2f8A4cJK4WpJo2zsLqfMrawyoYTAOC1qGHIWbHWYhovaJXsOrjVVoshWWrRDhKYKclRCRVlSCkChgqUoCSkqlbiVCmclStTY6JyuqNDo6wTKG/iLSJpEPB0eCC30jVRMxHtatJtOoNx+plZkdYuGYTuNlweKpSuzD/it+DiTyyTTraupE7H7VMnUbarAx3D30nmnUEOHS4IOjmncHqs+TLE+YbcWKa/bLjcfgDNgsivgDPyn0Eru6tDqPfRZmKw4F/X9FcoyulsLlaWHy+XcEL1jwSyMIzu55/7iPwXn+NrtIjU916P4WpluEog6lpf/ALnFw+hC64Z3Znz17a6aqi5JMVpZEHIb0QobkAiFAhEUXKAFwUCiPQ3IBFJIlMg6FlAdEVtIJmlEBQOGpFKVElA8piU0qjxTidPDtzVDd1msBGZx7Dp1OykW6lQNBc4hrRckmAPMrkuN+Lj/AA8KLaGudR1yNP3lc9x3xA+ueYw0X+GLMH4u8/PZY5xRLQ4wbkAZokWsWgzl8tb3srxWI9gtfnJkZjcudJDr7m/U/wDKhga9aic1B7mEQCIiZ+1aHD/UgvDc8RE/ygElp6HML/37QpuZcE9bCIt3sPvUW1K0ePTsuD+N6RhmLYWv3qU2ks8y0EkekrqnYnDV6Qmo11EWbXaZ+CT/ACv6Uyf9p7aeSuDQMhaHR/M7lNz08pjXrZBbmpvPw3mm67eUwAL8pgyel77QVmtx6/Hhpryberef+vRuKYB1OWkXHl9DuFzVWb201BEJ+C+MK1HLRrtGIwzTkED983/23bx9lwg9rLU4txXDtIa9h+HUGeniKfPRe3Nl0+ZrgbERY+hOS2C9PXlrrycd/wAp1LkKtEudAF5geq9bo0gxrWDRjQ0eTRA+5cE2phabG4ljhWDKjXupMcC8hpzOaBseWy71lVr2tfTdnY9oex40c1wkFd+NO4nbLy41MaPKYlNKYlamMxQ3KRKg4oIqDk5Ki4okNxQnlTeUJxQQJTqBKSIdK1yICqrXIzSgLKiSo5lFzkAOKcQZh6Tqr7hos0auOzR3K8tx3Fqldxq1HS98AMBOXJJAa2/y3AtcwStLx7xgV6wwrHfu6HNVImMxFgCNxpbq4LmrG9jMAQ5oDWwB1EEA/gd1evg0bEvvL3BxN+XuSL+23VSqVDm+1YHldoQcokjpYDQXCr1HH5BbKBLYEn1HzDTeJSqmIM2bEg6E6jsTBPb3vWZWhaDiBLT1Jyby6ILtTMaeu8qb6rL5XNcHR1sYOhEaQfpqsymbcwdldmMhljlNgDa17+Y7JYEzIaC6HWBu4yJ2j6FQlpU2PMAiA+SJtOXUAum9jp/ZGqSA4Zi0OMANu6RtqAddfzVGmQS4kANJvkhxGWIgSSNdZv1V0MHKWvJ5Q4wC0MuDd0HN+fW0yBkf1HQEC5gG5bF5Fx+pWjw7LiqZwdQ8z3fFwxJyxWjKaZcRYVBbSMwaVUznMHcueQZc5piQI5Ykxcd+iCQWmBlBnKYI0Fj1sZN1EwKVbBETOTMyxzS18C3y6zNoiRC63wVx91Km/D1AXNpA12AahovXa3rAmpH9NTqFl1v+qJcwk4rQz/6iB8zIP8eJBaPnguEnMA/hK+KaHiWsZiS7NfKwYetnk9IEGbaqEPSMDjqddoqUnh7TuNR2I2KOSvIMFxCrh3/EouLDq4GId2Lemi9K4HxhmLph7bOFns3a78uhUoaRKg4pEqDigaVFxSlQcVAg8oTipPKE4oIykoSkpG+xyM0qmx6O16gHlZ3Hcf8A4ehUrDVjSQP6jZo9yFczLA8bEnB1YIBGQidLVGJA8wwxdmDXczpNapJJlxPI0xfeT59r2WAg3JJINiDFjA8/wsquFu1xDnE1SeVomWgRfoJ7bdlaBgiAOVpnO4EH0tP68ldKhiapBLcogE6EZx1voR+WqM8OcxhN6cuaHBtzPMQ4/wDO8TdBxjS3MSLOlpHNe4dc6bjT7IQ8E22VwgkdNd5M6bXVQEVOY82WASLbx33P4nyU+G1SC8tcWHlAjuCDeZ089VTvJ2IkHrIMFE4UMxMCSTGoGu1/vQaPNncWuBDP5jEkTFwdbnRXqdWTNR8i1wQTB2iYHW/4rOrOJkElsQAzL5TJMXntrKs4do2BbABdFtBpmneJvpB2CDQquz8zx8oAyl0ANtBk8xnaZ1nyCarZLZL2G0usY9zZDNTKcrsjmDXJmymxtOpiUnPE5coMAw4WMibl15ETbe1rIlN9CnEzAdAicwEbno7QiPpCO7xFiTSdTOIcWvAY45WGq9muR9YgPc2RpPmqXwnaxlgf1Anc7ET7KVOnLcrnGfmaHNcYBiTljcAmR07wmkFmDvmcCdAI6mZcdtYnylLh/EKuGqCrTdEWdBBaROjgNkDPYWBAlocGgE3m95JvulWbbYg7AgHvIHcqR6nwXizMVSFVljOVzd2uG34q45y8+8A4/JWdRNg8W5geZsn6ifZd44qsiWZDc5MSoEqAz3ITnJPKG4oGJSQyUkGvTerDXKjTcrLXKosZ1z3jer/0VUal+SmJ0l9RrR962y5c541xOXDFoPM9zQL3sZJ9FMexw1Kkc7csFoaI8mgdfI/VSq1SZJL5Blsu5QHa2i1r22RsBSs4iztBmMQ68ugNiw2VatqDUbmm9hBJN7xc7QPNdZAeKMJIhpBLBLTMkjUzv7+yqcPqQbx0vZw7TBHoVYxxAabHUiIBbF7Qbg6Re2qqYSmdTBmSbxFiZKqK1V3M6dZdfSDJO26Jw1xANyPI9kDGNIJOmaY9DsVcwFA5ATMOkizhpoZiDPYoDlpJygmwMRLhP9yNkxqQ2AAO531vfe8I4aXS5ryANBvqenaTMblCrEGBAc6LvM+QgNudtd0E6FQyOUEmW8wdlEgybARA6HqVZNQtGugGUmbdAIkR8xgxqVXoMaLuymf8s5viXBgk2BIsfawRw4GJ5bgAC7SLyJ7HvPNCJMWEZcpue5EGL9EOqYMbOAufeAdun5I1YtJIaS0FxNjm/uLjp0SxbcozDlkWhpDYFp16jeUAqjjcEyADoZtygaGE0TBEQYAuJMk9LA2U3MNSBcmHcxIvAEXN3HteNkLDE5YPXWRadLbflKISwmJ+HiG1By5HNOkWBGaephesFy8cxAieosbgmRqRtsvW6BORs65Wz7BVsmBSVBzkiUNxUGjOKE4p3FDcUNGlJQlJBo0nqw16oUnKy1yqlZL1xHjfFg1Wsk/uxtNnOvr5RouxDl5xxeuKuIcQRzPIBN9LASLgQBor09olCvUDWMLgCSJIdI0uJA1mPzVB1UOGgnSGgRF+s/oqxiKhJIE2jRwI7SNJ+uqqVjf5jnFzJBbNySPoryqjjKf7vMLnprGuphQYRkg2IEjlInY3BPqIiyfFPLqbpIJsYAHWLRvdBwrJGoba0zzbdYMfqVCVTGvm20n66/gtIPEMExDY5QGkQDMkG5JkXWVU5nx/UtOna7JnTLMkWgk201CB6QkEy24k5iRO+kAG/T6pnAzLXC8CBYjQmJ27qb+XleGwLEtDS7cxOxtqo0gZAMQS0/MNNjMQInVAak7KQ0Oa0GOZ2vnMGP8AjzRaonQl0kgTfQAyQetxY/3r1KpNTMQA5sEuzZrkyHXJB1289lOo0WcHXN819ZIQM9ztXDWeYgydARfp5bqxhxHNcAi0GDe1piTE6dEOmwkGQWgkcrdQL3a114F7z19CUsrZlrtAAQ+ZJLYBIHSdESHWw5h0XgyQwDJlvBLt/b8kGizeJG940voREdEY5dJiRYwBE7EkX26ae9SvUIMQBMOkkF0QIknS3kiF7BUxVrU6US1zw0y6eX+YDbrfqvTiV5xwClGJoibh0kReIOp8wvQyVSyYSJQ3FIlQcVVKLihkpOKgSpQRKZRlJBbpFWGuVOmUdrlVImLrZKb3/Za53sCvN8NBeXn5WjaC7NtA/QAXbeIq5bhqkG5AaLjcjquFYQ0Qbh95FyABAvbcwuuP0ix8NVu5zgHRYsLBmHcEghumvVBr1gZ5YJsM0Ogf6jcHTRAY8k9Ms3AAv367IoYS05TqQILJkwbA3vrpe6lCFUOyONogi0WNzb69lSofL57wfVXGuzi/zQBYAN9fRUKrsrI0J0E7X1QDwjczvunck2C08Q2zQduukX6afq6z8BScdBO/sJj2CvvbcHYweQttOk5bA20N0Qm4ieW4hujREjcxGXSfvm6fDsJa45mAzLg94lw6RqTqSZlAdUvLM0gRp6Ejzv79k9YP+Z2rp3BJO5IF5PU63RKxg6jWvzgAw2BIGVrjF72JHMb281YqvzkFzyX71DsG6xJ5rW9GxuqODcwHNd0CwmPOTv6K1VEhxJJBgm+8Xk5TJBde8mUTANKBlzEtHUC42PSZg7olJwnUXNnZXF9z5QTr6pm6aupiADBNyDe2+gMTso/EBJM2M8p/XSUByZbmEFoJaGtPPMCdbkXGs6+cVKzRqPnnQgyI1nbt+gifDcAbm1pzAWFoI1jTyUa7SA1xIAtuHNJGsjuRp/ZENDwkAcTTnYONtyGuHqvQMy898Nuy4mlAyyXAgtgyWkR9ZXelypb2mEyVBzkxchucqpJxQ3FM5ygSgeUlCUkFmm5Ga9UmORWuUJhjeL+LfDaKVhnBdJvoYiPdchieJNJlhfFhBj1/Bd1xPg9HEkOqgn4Qc4QYBtoe0wVyuK4e2YaFeLagim2WzHNkEsB8/rZTfjGukBp8gQGnvG3kpVuHxsqdXCwp7yaStgsE3cTt/M3X7Q7LLxJvHr7pi9zTAJHbb2Uaz8xB7AKykrOHtBG3mrbaljI133mQT57+6HhYynV1oFjIOpFj0GsFMHZiBYADQamBrfc+yCy1odZkOMi2pdYuJF+33dVENhpNi6NDsL99baQoF0iC4cojLtv6Eieu+6i58CdTMaEDqDO5n8EFrBtgy3a5nMIiDexF7/VM+XEAcxdGxmT6KGGzEGSTJvr5i35ogdFyQ28ZXSZsNYva3uEEnVXmzubKflM263GmnVL40HXzBILD2hoiNEnOaNg63zRNoMkB0DXqJFkKkJNnEQYFpMddUBw9sks88sXBJ2F5hCpusbxIjqSDsOnT1SrvgnLYti4eJ8xv6XUWyZLpcSLB0tJncddUB+BVB/iGXAh7Y3nmA18l6GXLzLAuDHBxPyuDtDAg9RYafcvSXOVLJhIuUC5RLlAuVUnc5Qc5Qc5Qc5BPMmQ8ySArHIrXqkx6K16hO1upUhj+4y+5H5LKGEgSd1bqkkADdzZ8rq1iYLoGgtCn4dKMCvheyxcdTiy7KrRsudxNAGqxp/mcB/uIH5rjvy72rqHIYkguPayGwI+Kpw53mbKNFo1Pa3VaojTDM7lZokNI3jZ2imdYBA0BkwDEX1Mb6KORsX17GR6207zsnYZi4tH8g201ufuUgrKMuyt1nsAN9zf3CDVuYkHTQAC/p9FOo5xIdodiABERsNDp7oT3iABIjYk6zt92iC3h3csWIAgTIFr7fioRO55RNgTMkAk3gaj6JSIAAveSTN7+UbJ6rQDsCBpGaYJGaRcaTeD7oFTqGdiRps36RARA7oQ2NgDH1JB16qGHZLSW5839IJEi4kxawPsnA3Mki5vJjcxobeSAjWTOkkTzWl3rvqYQwAbCB797/rooPcYIMmTqSSLRFv1qo0xE3JEEHLIdvrZAz3ZXECQbjlPoQdZ9F6Bg62amxx1c1pPnAlee13X1gQBIbY2/OV2Ph+vmoN3ylzfYmPoQq2TDVLlAuUC5QLlRKRcoFyg5ygXIJ5kkHMkpEmFFakkoFuh8v/yH4qVX+IUkkt6dcfs9c8pWFU/j0/Nv/wBkklnj203/ABcfxMRUfG7j96hRFh5pJLa85Yc0fCLo5g8NkdId+QVjB0WlryRcMkGT9hx/AeySSCvTcXTJkQTG2k6Ku/UeQPuAfxTpINavSaKLHAczpJO/zOHpZAyDOBFv3n/bmhJJAFjjfvknoZvp5pBxAJFiTltaxF0kkSkx5cQCZBgEdUFtrjWJ+qSSCBqHWTM9fddT4WP7t3+v/wDLUklW3ohsFQJSSVFgnFQJSSQQlJJJWH//2Q==',
    quote: 'Growing up in a fishing village near Lake Victoria, becoming a doctor seemed impossible. The Blue West scholarship didn\'t just pay my fees — it gave me a future, and now I\'m giving that future to my community.',
    outcome: 'Dr. Mary Akinyi, MBChB 2022 — now serving as Medical Officer at Homa Bay County Hospital, serving 50,000 patients annually.'
  },
  {
    name: 'Ayan A', county: 'Turkana County, Northern Kenya', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&q=80&fit=crop&crop=face',
    quote: 'My village had no health facility within 60km. I walked to school. My parents are pastoralists. But Blue West said: your potential matters more than your postcode. I am now training to return and serve my people.',
    outcome: 'John is completing Year 4 of his MBChB on a full Blue West Rural Scholarship. He plans to return to Turkana as a family physician.'
  },
  {
    name: 'Faith Chebet', county: 'Elgeyo-Marakwet County', img: 'data:image/jpeg;base64,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',
    quote: 'When my father passed, my mother — a small-scale farmer — couldn\'t afford my second year. The emergency bursary from Blue West supporters kept me in school. I never forgot that kindness. Now I want to pay it forward.',
    outcome: 'Faith Chebet, BNSc 2023 — now Community Health Nurse in Iten, running maternal health clinics serving 8 rural villages.'
  },
]

const donations = [
  { amount: 'KSh 5,000', usd: '$40', label: 'Supplies Package', desc: 'Funds a complete clinical skills kit — stethoscope, BP cuff, and diagnostic tools — for one rural scholarship student for a full academic year.' },
  { amount: 'KSh 15,000', usd: '$115', label: 'Monthly Bursary', desc: 'Covers one month\'s living expenses for a scholarship student — accommodation, meals, and transport for practical attachments.' },
  { amount: 'KSh 45,000', usd: '$345', label: 'Semester Scholarship', desc: 'Fully funds one semester of tuition for a rural student who would otherwise have had to leave their programme due to financial hardship.' },
  { amount: 'KSh 100,000', usd: '$770', label: 'Full Year Scholarship', desc: 'Your most impactful gift — a full year of education for one student. A single gift at this level transforms a life, a family, and ultimately a community.' },
]

const missionAchievements = [
  { icon: '🎓', stat: '150+', label: 'Scholarship Recipients', desc: 'Students from all 47 Kenyan counties supported through our bursary programme' },
  { icon: '🏥', stat: '15+', label: 'Rural Health Facilities', desc: 'Clinics across Kenya now staffed primarily by Blue West graduates through our rural placement commitment' },
  { icon: '👶', stat: '200+', label: 'Births Attended', desc: 'Deliveries attended by Blue West-trained midwives in Kenya\'s remote areas, significantly reducing maternal mortality' },
  { icon: '💉', stat: '500+', label: 'Patients Served Annually', desc: 'People receiving healthcare from Blue West alumni working in underserved counties — Turkana, Marsabit, Samburu, Mandera' },
  { icon: '🌿', stat: '10+', label: 'Community Clinics Run', desc: 'Free outreach clinics held each year by our students and staff in rural communities around Eldoret' },
  { icon: '📚', stat: '87%', label: 'Rural Graduate Return Rate', desc: 'Of scholarship graduates who commit to our Rural Service Pledge return to serve in their home county for at least 3 years' },
]

interface DonorForm { first_name: string; last_name: string; email: string; phone: string; donor_message: string }
const INIT_DONOR: DonorForm = { first_name: '', last_name: '', email: '', phone: '', donor_message: '' }

export default function Donations() {
  const [selectedAmount, setSelectedAmount] = useState('')
  const [customAmount, setCustomAmount] = useState('')
  const [donationType, setDonationType] = useState<'once' | 'monthly'>('once')
  const [donor, setDonor] = useState<DonorForm>(INIT_DONOR)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'sent' | 'error'>('idle')
  const [submitError, setSubmitError] = useState('')

  function setDonorField(f: keyof DonorForm, v: string) { setDonor(prev => ({ ...prev, [f]: v })) }

  async function handleDonate() {
    const amountStr = customAmount || selectedAmount.replace('KSh ', '').replace(/,/g, '')
    const amount = parseFloat(amountStr)
    if (!amount || isNaN(amount)) { setSubmitError('Please select or enter a donation amount.'); setSubmitStatus('error'); return }
    if (!donor.first_name || !donor.last_name || !donor.email) { setSubmitError('Please fill in your name and email.'); setSubmitStatus('error'); return }
    setSubmitStatus('submitting')
    const { error } = await supabase.from('donations').insert([{
      first_name: donor.first_name,
      last_name: donor.last_name,
      email: donor.email,
      phone: donor.phone || null,
      amount,
      currency: 'KES',
      status: 'pending',
      campaign: donationType === 'monthly' ? 'monthly-giving' : 'general',
      donor_message: donor.donor_message || null,
    }])
    if (error) { setSubmitError(error.message); setSubmitStatus('error') }
    else setSubmitStatus('sent')
  }

  return (
    <>
      {/* Hero */}
      <div style={{ position: 'relative', minHeight: '80vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/054/627/791/small/kenya-flag-on-the-flagpole-free-photo.jpg" alt="Rural Kenya healthcare" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(110deg, rgba(8,18,35,0.96) 45%, rgba(8,18,35,0.6) 100%)', zIndex: 1 }} />
        </div>
        <div className="container-wide" style={{ position: 'relative', zIndex: 2, padding: '6rem 2rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.5rem' }}>
            <span style={{ width: '32px', height: '1px', background: 'var(--gold)' }} />Make a Difference Today<span style={{ width: '32px', height: '1px', background: 'var(--gold)' }} />
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5.5vw, 5.5rem)', fontWeight: 300, lineHeight: 1.05, color: 'var(--white)', maxWidth: '800px', marginBottom: '1.5rem' }}>
            Education Is the<br /><em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>Greatest Medicine</em>
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(232,237,245,0.78)', maxWidth: '540px', lineHeight: 1.85, marginBottom: '2.5rem' }}>
            Millions of talented young Kenyans in rural areas have the heart of a healer — but not the means to pursue medical education. Your donation funds their future, and the health of thousands of Kenyans they will serve.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#donate-form" className="btn btn-solid"><span>Donate Now</span></a>
            <a href="#our-mission" className="btn"><span>See Our Impact</span></a>
          </div>
        </div>
      </div>

      {/* Mission Impact Stats */}
      <div id="our-mission" style={{ background: 'linear-gradient(135deg, var(--navy-light), var(--cobalt))', padding: '4rem 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="tag">Our Impact</div>
            <h2 className="section-title">38 Years of <em>Healing Communities</em></h2>
            <div className="divider divider-center" />
            <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>From the slopes of Mount Elgon to the shores of Lake Victoria — Blue West graduates are transforming healthcare in Kenya's most underserved communities.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="impact-stats-resp">
            {missionAchievements.map(a => (
              <div key={a.label} style={{ background: 'rgba(10,22,40,0.4)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', padding: '2rem', textAlign: 'center', borderRadius: 'var(--radius)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{a.icon}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 300, color: 'var(--white)', lineHeight: 1, marginBottom: '0.5rem' }}>{a.stat}</div>
                <div style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.75rem' }}>{a.label}</div>
                <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.65 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:900px){.impact-stats-resp{grid-template-columns:1fr 1fr!important;}} @media(max-width:600px){.impact-stats-resp{grid-template-columns:1fr!important;}}`}</style>
      </div>

      {/* Our Mission Narrative */}
      <section className="section section-alt-bg">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="mission-narrative-resp">
            <div>
              <div className="tag">Why We Do This</div>
              <h2 className="section-title">Healthcare Begins with <em>Education</em></h2>
              <div className="divider" />
              <p style={{ fontSize: '0.92rem', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '1.25rem' }}>Kenya has fewer than 1 doctor per 5,000 people — far below the WHO-recommended ratio. In rural counties like Turkana, Mandera, Wajir, and Marsabit, that ratio is as low as 1 per 50,000. This is not a medical crisis — it is an educational crisis.</p>
              <p style={{ fontSize: '0.92rem', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '1.25rem' }}>The biggest barrier between talented rural Kenyans and medical careers is not ability — it is money. Most rural families cannot afford the KSh 280,000 annual tuition for an MBChB, let alone accommodation, books, and living costs over six years.</p>
              <p style={{ fontSize: '0.92rem', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '2rem' }}>Blue West Medical Training College's founder, Dr. James Waweru, grew up in a rural community where he watched people die from curable conditions. He built this college on a simple belief: <em style={{ color: 'var(--gold-light)' }}>that the best healer for a community is someone who comes from that community.</em></p>
              <p style={{ fontSize: '0.92rem', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '2rem' }}>Your donation sustains that belief. Every shilling given directly funds scholarships, community clinics, rural placements, and the training infrastructure that turns rural youth into Kenya's healthcare heroes.</p>
              <Link to="/about/mission" className="btn"><span>Read Our Full Mission Statement</span></Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo4KnLpaatDPhoD54M6kosUYQXwLH1VMmTxw&s" alt="Rural Kenya healthcare" style={{ width: '100%', height: '260px', objectFit: 'cover' }} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80&fit=crop" alt="Medical students" style={{ width: '100%', height: '160px', objectFit: 'cover' }} />
                <img src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&q=80&fit=crop" alt="Community health" style={{ width: '100%', height: '160px', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:900px){.mission-narrative-resp{grid-template-columns:1fr!important;gap:3rem!important;}}`}</style>
      </section>

      {/* Impact Stories */}
      <section className="section section-mid-bg">
        <div className="container">
          <div className="section-header-centered">
            <div className="tag">Real Lives Changed</div>
            <h2 className="section-title">Stories of <em>Transformation</em></h2>
            <div className="divider divider-center" />
            <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>These are not statistics — these are people whose lives, and the thousands of lives they touch, were made possible by donors like you.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginTop: '3rem' }} className="stories-resp">
            {impactStories.map(s => (
              <div key={s.name} style={{ background: 'var(--section-alt)', border: '1px solid var(--border)', overflow: 'hidden' }}>
                <div style={{ position: 'relative' }}>
                  <img src={s.img} alt={s.name} style={{ width: '100%', height: '220px', objectFit: 'cover', objectPosition: 'top' }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(8,18,35,0.9), transparent)', padding: '1.5rem 1.5rem 1rem', zIndex: 1 }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', color: 'var(--white)', fontWeight: 400 }}>{s.name}</div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--gold)', letterSpacing: '0.06em' }}>📍 {s.county}</div>
                  </div>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontStyle: 'italic', color: 'var(--text)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                    <span style={{ fontSize: '2.5rem', color: 'var(--gold)', lineHeight: 0, verticalAlign: '-0.4rem', marginRight: '0.2rem' }}>&#x201C;</span>{s.quote}
                  </p>
                  <div style={{ background: 'rgba(201,168,76,0.07)', borderLeft: '3px solid var(--gold)', padding: '0.75rem 1rem', fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.65, fontStyle: 'italic' }}>
                    {s.outcome}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:900px){.stories-resp{grid-template-columns:1fr 1fr!important;}} @media(max-width:600px){.stories-resp{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* Donation Form */}
      <section id="donate-form" className="section section-alt-bg">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }} className="donate-form-resp">
            <div>
              <div className="tag">Make a Donation</div>
              <h2 className="section-title">Give the Gift of <em>Medical Education</em></h2>
              <div className="divider" />
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '2rem' }}>All donations go directly to the Blue West Rural Health Scholarship Fund, student emergency bursaries, community clinic operations, and essential educational equipment. We publish annual financial transparency reports.</p>
              
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1rem' }}>Choose a Giving Level</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {donations.map(d => (
                    <div key={d.amount} onClick={() => setSelectedAmount(d.amount)} style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1.5rem', padding: '1.5rem', border: `1px solid ${selectedAmount === d.amount ? 'var(--gold)' : 'var(--border-blue)'}`, background: selectedAmount === d.amount ? 'rgba(201,168,76,0.07)' : 'transparent', cursor: 'pointer', transition: 'all 0.2s', alignItems: 'start' }}>
                      <div>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 300, color: selectedAmount === d.amount ? 'var(--gold)' : 'var(--white)', lineHeight: 1 }}>{d.amount}</div>
                        <div style={{ fontSize: '0.65rem', color: 'var(--muted)', marginTop: '0.25rem' }}>{d.usd} USD approx.</div>
                        <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', marginTop: '0.5rem' }}>{d.label}</div>
                      </div>
                      <p style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.65 }}>{d.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                {/* Trust badges */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%' }}>
                  {['All donations are 100% tax-deductible in Kenya', 'Registered charity under Kenya Charitable Organisations Act', 'Annual financial transparency report published every March', 'Zero administrative fees — 100% goes to student support'].map(t => (
                    <div key={t} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', fontSize: '0.78rem', color: 'var(--muted)' }}>
                      <span style={{ color: 'var(--gold)', flexShrink: 0 }}>✓</span>{t}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Donation Form Panel */}
            <div style={{ background: 'var(--navy-mid)', border: '1px solid var(--border)', borderTop: '4px solid var(--gold)', padding: '3rem', position: 'sticky', top: '100px' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 300, color: 'var(--white)', marginBottom: '0.5rem' }}>Your Donation</h3>
              <p style={{ fontSize: '0.78rem', color: 'var(--muted)', marginBottom: '2rem' }}>Secure, tax-deductible donation to the Blue West Rural Health Scholarship Fund.</p>

              {/* Frequency toggle */}
              <div style={{ display: 'flex', marginBottom: '2rem', border: '1px solid var(--border-blue)', overflow: 'hidden' }}>
                {(['once', 'monthly'] as const).map(t => (
                  <button key={t} onClick={() => setDonationType(t)} style={{ flex: 1, padding: '0.75rem', background: donationType === t ? 'var(--gold)' : 'transparent', color: donationType === t ? 'var(--navy)' : 'var(--muted)', fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', transition: 'all 0.2s' }}>
                    {t === 'once' ? 'One-Time' : 'Monthly Giving'}
                  </button>
                ))}
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.5rem' }}>Donation Amount (KSh)</label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
                  {['5,000', '15,000', '45,000', '75,000'].map(a => (
                    <button key={a} onClick={() => { setSelectedAmount(`KSh ${a}`); setCustomAmount('') }} style={{ padding: '0.85rem', background: selectedAmount === `KSh ${a}` ? 'var(--gold)' : 'rgba(255,255,255,0.04)', border: `1px solid ${selectedAmount === `KSh ${a}` ? 'var(--gold)' : 'var(--border-blue)'}`, color: selectedAmount === `KSh ${a}` ? 'var(--navy)' : 'var(--text)', fontSize: '0.85rem', fontWeight: 500, cursor: 'pointer', transition: 'all 0.2s', borderRadius: 'var(--radius)' }}>
                      {a}
                    </button>
                  ))}
                </div>
                <input type="number" placeholder="Or enter custom amount" value={customAmount} onChange={e => { setCustomAmount(e.target.value); setSelectedAmount('') }} style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-blue)', color: 'var(--text)', fontFamily: 'var(--font-body)', fontSize: '0.85rem', padding: '0.85rem 1rem', outline: 'none', borderRadius: 'var(--radius)' }} />
              </div>

              {([['First Name', 'first_name', 'text', 'e.g. Kamau'], ['Last Name', 'last_name', 'text', 'e.g. Mwangi'], ['Email Address', 'email', 'email', 'you@email.com'], ['Phone Number', 'phone', 'tel', '+254 7XX XXX XXX']] as const).map(([label, field, type, ph]) => (
                <div key={label} style={{ marginBottom: '1.25rem' }}>
                  <label style={{ display: 'block', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.5rem' }}>{label}</label>
                  <input type={type} placeholder={ph} value={donor[field]} onChange={e => setDonorField(field, e.target.value)} style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-blue)', color: 'var(--text)', fontFamily: 'var(--font-body)', fontSize: '0.85rem', padding: '0.85rem 1rem', outline: 'none', borderRadius: 'var(--radius)' }} />
                </div>
              ))}

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.5rem' }}>Message / Dedication (Optional)</label>
                <input type="text" placeholder="In memory of / in honour of..." value={donor.donor_message} onChange={e => setDonorField('donor_message', e.target.value)} style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-blue)', color: 'var(--text)', fontFamily: 'var(--font-body)', fontSize: '0.85rem', padding: '0.85rem 1rem', outline: 'none', borderRadius: 'var(--radius)' }} />
              </div>

              {submitStatus === 'sent' ? (
                <div style={{ background: 'rgba(5,150,105,0.1)', border: '1px solid rgba(5,150,105,0.5)', padding: '1.25rem', borderRadius: 'var(--radius)', textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✅</div>
                  <div style={{ color: '#6ee7b7', fontWeight: 500, marginBottom: '0.25rem' }}>Thank you for your donation!</div>
                  <p style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>We will send a receipt and confirmation to {donor.email}. Our team will be in touch shortly.</p>
                  <button onClick={() => { setSubmitStatus('idle'); setDonor(INIT_DONOR); setSelectedAmount(''); setCustomAmount('') }} className="btn" style={{ marginTop: '1rem', fontSize: '0.75rem' }}><span>Make Another Donation</span></button>
                </div>
              ) : (
                <>
                  {submitStatus === 'error' && (
                    <div style={{ background: 'rgba(225,29,72,0.08)', border: '1px solid rgba(225,29,72,0.4)', color: '#fca5a5', padding: '0.85rem 1rem', fontSize: '0.82rem', marginBottom: '1rem', borderRadius: 'var(--radius)' }}>⚠ {submitError}</div>
                  )}
                  <button onClick={handleDonate} disabled={submitStatus === 'submitting'} className="btn btn-solid" style={{ width: '100%', justifyContent: 'center', border: 'none', cursor: submitStatus === 'submitting' ? 'not-allowed' : 'pointer', padding: '1rem 2rem', fontSize: '0.85rem', opacity: submitStatus === 'submitting' ? 0.7 : 1 }}>
                    <span>{submitStatus === 'submitting' ? 'Processing…' : `❤ Donate ${donationType === 'monthly' ? 'Monthly' : 'Now'} — ${selectedAmount || `KSh ${customAmount || '...'}`}`}</span>
                  </button>
                </>
              )}

              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginTop: '1.25rem', fontSize: '0.7rem', color: 'var(--muted)', justifyContent: 'center' }}>
                <span>🔒 Secure · Encrypted · Trusted</span>
              </div>

              <div style={{ marginTop: '1.5rem', borderTop: '1px solid var(--border-blue)', paddingTop: '1.25rem' }}>
                <p style={{ fontSize: '0.72rem', color: 'var(--muted)', lineHeight: 1.65, marginBottom: '0.75rem' }}>Prefer to give by M-Pesa or bank transfer? Contact our donations office:</p>
                <p style={{ fontSize: '0.78rem', color: 'var(--text)' }}>📞 +254 53 206 2199</p>
                <p style={{ fontSize: '0.78rem', color: 'var(--text)' }}>✉ donate@bluewest.ac.ke</p>
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:900px){.donate-form-resp{grid-template-columns:1fr!important;gap:3rem!important;}}`}</style>
      </section>

      {/* Other Ways to Give */}
      <section className="section section-mid-bg">
        <div className="container">
          <div className="section-header-centered">
            <div className="tag">Other Ways to Give</div>
            <h2 className="section-title">Support That Goes <em>Beyond Money</em></h2>
            <div className="divider divider-center" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginTop: '3rem' }}>
            {[
              { icon: '🤝', title: 'Corporate Partnerships', desc: 'Partner with Blue West to sponsor named scholarships, fund equipment, or establish mentorship programmes for students in your field. CSR-aligned, tax-deductible, and deeply impactful.' },
              { icon: '👴', title: 'Planned Giving & Endowments', desc: 'Leave a lasting legacy through a bequest, charitable annuity, or named endowment. Planned gifts create permanent scholarship funds that give in perpetuity in your name or your family\'s.' },
              { icon: '🎓', title: 'Alumni Giving', desc: 'Our alumni community is our strongest asset. Join the Blue West Alumni Giving Circle and commit to an annual gift that funds the next generation of healers — just as others funded yours.' },
              { icon: '🔬', title: 'Equipment & In-Kind', desc: 'Donate medical equipment, textbooks, simulation tools, or laboratory supplies. In-kind gifts are tax-deductible and directly strengthen our training capabilities.' },
              { icon: '👩‍🏫', title: 'Volunteer Expertise', desc: 'Medical professionals, legal experts, engineers, and educators can volunteer time for guest lectures, mentorship, mock interviews, and career coaching for our students.' },
              { icon: '🌍', title: 'International Diaspora', desc: 'Kenyan professionals in the diaspora — UK, USA, Canada, Germany, UAE — can partner with Blue West through our international giving portal. Your contribution is exempt under applicable tax treaties.' },
            ].map(w => (
              <div key={w.title} style={{ background: 'var(--section-bg)', border: '1px solid var(--border-blue)', padding: '2rem', transition: 'border-color 0.3s, transform 0.3s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-blue)'; (e.currentTarget as HTMLElement).style.transform = 'none' }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{w.icon}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 400, color: 'var(--white)', marginBottom: '0.75rem' }}>{w.title}</div>
                <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.75 }}>{w.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/contact" className="btn"><span>Discuss Other Giving Options</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}
