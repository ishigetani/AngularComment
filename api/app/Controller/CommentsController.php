<?php
App::uses('AppController', 'Controller');
/**
 * Comments Controller
 *
 * @property Comment $Comment
 * @property ApiComponent $Api
 */
class CommentsController extends AppController {

/**
 * Components
 *
 * @var array
 */
	public $components = array('Api');

	public function index() {
		$comments = $this->Comment->find('all');

		if (!empty($comments)) {
			$this->Api->success($comments);
		} else {
			$this->Api->error(__('Not found Comments.'));
		}
	}
}
