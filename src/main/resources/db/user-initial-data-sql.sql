INSERT INTO `users` (`user_id`, `email`, `enabled`, `firstname`, `password`, `surname`, `telephone`, `type`, `username`)
VALUES (1, NULL, TRUE, NULL, 'admin', NULL, NULL, NULL, 'admin');


INSERT INTO `roles` (`role_id`, `role_name`, `user_user_id`) VALUES (1, 'ROLE_USER', '1');
INSERT INTO `roles` (`role_id`, `role_name`, `user_user_id`) VALUES (2, 'ROLE_ADMIN', '1');

INSERT INTO `users` (`user_id`, `email`, `enabled`, `firstname`, `password`, `surname`, `telephone`, `type`, `username`)
VALUES (2, NULL, TRUE, NULL, 'user', NULL, NULL, NULL, 'user');

INSERT INTO `roles` (`role_id`, `role_name`, `user_user_id`) VALUES (3, 'ROLE_USER', '2');

INSERT INTO `courses` (`id`, `category`, `subject`, `tutor_user_id`) VALUES (NULL, 'school', 'history', '1');
INSERT INTO `courses` (`id`, `category`, `subject`, `tutor_user_id`) VALUES (NULL, 'exam', 'math', '1');