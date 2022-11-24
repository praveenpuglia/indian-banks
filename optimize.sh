#!/bin/sh
ls -d assets/logos/* | xargs -I {} bash -c "cd '{}' && svgo -f ."