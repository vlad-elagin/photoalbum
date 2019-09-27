echo "Deploying"

exec heroku container:push web -a photoalbum-staging &
wait $!

exec heroku container:release web -a photoalbum-staging &
wait $!

echo 'Deployed!'